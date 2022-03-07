import {
  CompleteMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
  S3,
  UploadPartCommandInput,
} from '@aws-sdk/client-s3';
import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { Job, Queue } from 'bull';
import { chunk, flatten } from 'lodash';
import { ScryfallCard } from 'prisma/prisma-client';
import * as stream from 'stream';
import Chain, { chain } from 'stream-chain';
import { parser } from 'stream-json/Parser';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { ScryfallCardFaceCreateManyInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-face/scryfall-card-face-create-many.input';
import { ScryfallCardFaceService } from '../services/scryfall-card-face.service';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { SetDataService } from '../services/set-data.service';
import {
  ScryfallCardDataType,
  ScryfallCardFaceDataType,
} from '../types/scryfall.types';
import { toCardObjectType } from '../utils/to-prisma-card';
import { toCardFaceObjectType } from '../utils/to-prisma-scryfall-card-face';

@Processor('bulk-data')
export class BulkDownloadConsumer {
  constructor(
    private readonly configService: ConfigService,
    private readonly scryfallCardService: ScryfallCardService,
    private readonly scryfallCardFaceService: ScryfallCardFaceService,
    private readonly setDataService: SetDataService,
    @InjectQueue('bulk-data') private readonly bulkDataQueue: Queue,
    @InjectQueue('price-data') private readonly priceDataQueue: Queue,
    @InjectQueue('set-data') private readonly setDataQueue: Queue,
    @InjectQueue('card') private readonly cardQueue: Queue,
  ) {}

  private readonly logger = new Logger(BulkDownloadConsumer.name);

  @Process('process')
  async process(
    job: Job<{ uri: string; contentType: string; typeName: string }>,
  ) {
    this.logger.debug(`Processing set data`);
    const setData = await this.setDataService.getSetData();
    const setProcess = await this.setDataQueue.add(
      'process',
      {
        data: setData,
      },
      { removeOnComplete: true },
    );
    await setProcess.finished();
    this.logger.debug(`Done processing sets`);

    try {
      this.logger.debug(`Downloading bulk data`);
      const download = await this.bulkDataQueue.add('download', job.data, {
        removeOnComplete: true,
      });
      await download.finished();
      this.logger.debug(`Done downloading data`);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    try {
      this.logger.debug(`Processing bulk data`);
      const processBulkData = await this.bulkDataQueue.add(
        'process-bulk-data',
        null,
        { removeOnComplete: true },
      );
      await processBulkData.finished();
      this.logger.debug(`Done processing bulk data`);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    this.logger.debug(`Processing price data`);
    const processPriceData = await this.priceDataQueue.add('process', null, {
      removeOnComplete: true,
    });
    await processPriceData.finished();
    this.logger.debug(`Done processing price data`);

    this.logger.debug(`Processing card face data`);
    const processCardFaceData = await this.bulkDataQueue.add(
      'process-card-faces',
      null,
      { removeOnComplete: true },
    );
    await processCardFaceData.finished();
    this.logger.debug(`Done processing card face data`);

    this.logger.debug(`Updating PaladinDeck cards`);
    const processPaladinDeckCards = await this.cardQueue.add(
      'update-card-list',
      null,
      {
        removeOnComplete: true,
      },
    );
    await processPaladinDeckCards.finished();
    this.logger.debug(`Finished processing paladindeck cards`);
  }

  @Process('download')
  async downloadBulkData(
    job: Job<{
      uri: string;
      contentType: string;
      typeName: string;
    }>,
  ) {
    this.logger.debug(`Starting download job`);

    this.logger.debug(`Creating S3 object`);
    let s3: S3;
    try {
      s3 = new S3({
        credentials: {
          accessKeyId: this.configService.get<string>(
            'BUCKETEER_AWS_ACCESS_KEY_ID',
          ),
          secretAccessKey: this.configService.get<string>(
            'BUCKETEER_AWS_SECRET_ACCESS_KEY',
          ),
        },
        region: this.configService.get<string>('BUCKETEER_AWS_REGION'),
      });
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    const { uri, contentType } = job.data;

    if (contentType !== 'application/json') {
      throw new Error(
        `Bulk data content type must be "application/json", got ${contentType} instead.`,
      );
    }

    const downloadFile = async (
      downloadUrl: string,
    ): Promise<AxiosResponse<string>> =>
      axios.get(downloadUrl, { responseType: 'arraybuffer' });

    const fileResponse = await downloadFile(uri);
    const buffer = Buffer.from(fileResponse.data, 'binary');
    const partSize = 1024 * 1024 * 5;
    const bucket = this.configService.get<string>('BUCKETEER_BUCKET_NAME');
    const fileKey = `${this.configService.get<string>(
      'DOWNLOADS_DIR',
    )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}.json`;
    const multipartMap = {
      Parts: [],
    };
    let partsLeft = Math.ceil(buffer.length / partSize);

    const completeMultipartUpload = (
      doneParams: CompleteMultipartUploadCommandInput,
    ) => {
      s3.completeMultipartUpload(doneParams, (err) => {
        if (err) {
          this.logger.error(err);
          job.moveToFailed(err);
          throw err;
        }

        this.logger.debug(`Completed upload`);
      });
    };

    const uploadPart = (
      multipart: CreateMultipartUploadCommandOutput,
      partParams: UploadPartCommandInput,
      tryNumber = 1,
    ) => {
      s3.uploadPart(partParams, (err, data) => {
        if (err) {
          this.logger.warn(`Error uploading part`, err);
          if (tryNumber < 3) {
            this.logger.warn(
              `Retrying upload of part #${partParams.PartNumber}`,
            );
            uploadPart(multipart, partParams, tryNumber + 1);
          } else {
            this.logger.error(
              `Failed uploading part #${partParams.PartNumber}`,
            );
            job.moveToFailed(err);
            throw err;
          }
          return;
        }

        multipartMap.Parts[partParams.PartNumber - 1] = {
          ETag: data.ETag,
          PartNumber: partParams.PartNumber,
        };

        this.logger.debug(`Completed part #${partParams.PartNumber}`);
        if (--partsLeft > 0) return;

        const doneParams: CompleteMultipartUploadCommandInput = {
          Bucket: bucket,
          Key: fileKey,
          MultipartUpload: multipartMap,
          UploadId: multipart.UploadId,
        };

        this.logger.debug(`Completing upload...`);
        completeMultipartUpload(doneParams);
      });
    };

    s3.createMultipartUpload(
      {
        Bucket: bucket,
        Key: fileKey,
        ContentType: contentType,
      },
      (err, multipart) => {
        if (err) {
          this.logger.error(err);
          job.moveToFailed(err);
          throw err;
        }

        const uploadId = multipart.UploadId;

        this.logger.debug(`Processing UploadId #${uploadId}`);

        let partNumber = 0;
        for (
          let rangeStart = 0;
          rangeStart < buffer.length;
          rangeStart += partSize
        ) {
          const end = Math.min(rangeStart + partSize, buffer.length);
          const partParams: UploadPartCommandInput = {
            Body: buffer.slice(rangeStart, end),
            Bucket: bucket,
            Key: fileKey,
            PartNumber: ++partNumber,
            UploadId: uploadId,
          };
          this.logger.debug(`Uploading part #${partParams.PartNumber}`);
          uploadPart(multipart, partParams);
        }
      },
    );
  }

  @Process('process-bulk-data')
  async processBulkData(job: Job) {
    this.logger.debug(`Processing ${job.data.filePath}`);

    let s3: S3;
    try {
      s3 = new S3({
        credentials: {
          accessKeyId: this.configService.get<string>(
            'BUCKETEER_AWS_ACCESS_KEY_ID',
          ),
          secretAccessKey: this.configService.get<string>(
            'BUCKETEER_AWS_SECRET_ACCESS_KEY',
          ),
        },
        region: this.configService.get<string>('BUCKETEER_AWS_REGION'),
      });
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    const getObject = async () => {
      const response = await s3.getObject({
        Bucket: this.configService.get<string>('BUCKETEER_BUCKET_NAME'),
        Key: 'downloads/bulk_data.json',
      });
      if (response.Body instanceof stream.Readable) {
        return response.Body;
      }
      throw new Error();
    };

    let pipeline: Chain;
    try {
      pipeline = chain([await getObject(), parser(), streamArray()]);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    let count = 0;

    this.logger.debug(`Doing stuff`);
    const results = await new Promise((resolve, reject) => {
      let cards: ScryfallCard[] = [];

      pipeline.on(
        'data',
        async ({
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          key,
          value,
        }: {
          key: number;
          value: ScryfallCardDataType;
        }) => {
          if (cards.length < 1000) {
            cards.push(toCardObjectType(value));
          } else {
            this.logger.debug(`Processing new batch of 1000 cards #${++count}`);
            pipeline.pause();
            await new Promise((resolve) =>
              setTimeout(() => resolve(true), 100),
            );
            const processScryfallCards = await this.bulkDataQueue.add(
              'process-scryfall-cards',
              {
                cards: JSON.stringify(cards),
              },
            );
            await processScryfallCards.finished();
            this.logger.debug(`Done processing batch #${count}`);
            cards = [];
            pipeline.resume();
          }
        },
      );

      pipeline.on('end', async () => {
        if (cards.length) {
          this.logger.debug(
            `Finishing processing of cards #${cards.length} cards trailing`,
          );
          const processScryfallCards = await this.bulkDataQueue.add(
            'process-scryfall-cards',
            { cards: JSON.stringify(cards) },
          );
          await processScryfallCards.finished();
        }
        this.logger.debug(`Done processing all cards`);
        resolve(true);
      });

      pipeline.on('error', (err) => {
        this.logger.error('error', err);
        job.moveToFailed(err);
        reject(err);
      });
    });

    this.logger.debug(`Marking job as done`);

    job.moveToCompleted('done', true);

    return results;
  }

  @Process('process-scryfall-cards')
  async processCards(job: Job<{ cards: string }>) {
    const cards = JSON.parse(job.data.cards) as ScryfallCard[];
    this.logger.debug(`Processing PaladinDeck Card objects from data`);
    this.logger.debug(`Processing #${cards.length} objects`);

    try {
      const batches = chunk(cards, 10);
      const batchesLength = batches.length;
      let batchCount = 0;

      while (batches.length) {
        const batch = batches.shift();
        await Promise.all(
          batch.map(async (card) => {
            return await this.scryfallCardService.upsert(card);
          }),
        );
        this.logger.debug(
          `Batch #${++batchCount} of ${batchesLength} complete`,
        );
      }
      this.logger.debug(`Done processing PaladinDeck Card objects`);
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  @Process('process-card-faces')
  async processCardFaces(job: Job) {
    this.logger.debug(`Processing card faces`);

    this.logger.debug(`Deleting old CardFace data`);
    const deletedCount = await this.scryfallCardFaceService.drop();
    this.logger.debug(`Deleted #${deletedCount} CardFace records`);

    const cardsWithCardFaceDataCount = await this.scryfallCardService.count({
      cardFacesRaw: { isEmpty: false },
    });
    this.logger.debug(
      `Found #${cardsWithCardFaceDataCount} ScryfallCard records with card faces data`,
    );

    const batchSize = 100;
    const totalBatches = Math.ceil(cardsWithCardFaceDataCount / batchSize);

    try {
      for (let i = 0; i < totalBatches; i++) {
        this.logger.debug(`Processing #${i + 1} of ${totalBatches}`);
        const batch = await this.scryfallCardService.findMany({
          take: batchSize,
          skip: i * batchSize,
          orderBy: [{ id: 'asc' }],
          where: { cardFacesRaw: { isEmpty: false } },
        });
        const cardFaceInputs = flatten(
          batch.map((card) =>
            card.cardFacesRaw.map((cardFaceData) => {
              const parsedCardFaceData = toCardFaceObjectType(
                cardFaceData as ScryfallCardFaceDataType,
              );
              const cardFaceInput: ScryfallCardFaceCreateManyInput = {
                ...parsedCardFaceData,
                name: parsedCardFaceData.name,
                cardId: card.id,
                colorIndicator: {
                  set: parsedCardFaceData.colorIndicator || [],
                },
                colors: { set: parsedCardFaceData.colors || [] },
              };
              return cardFaceInput;
            }),
          ),
        );

        this.logger.debug(`Creating #${cardFaceInputs.length} records`);
        const cardFacesCreatedCount =
          await this.scryfallCardFaceService.createMany(cardFaceInputs);
        this.logger.debug(
          `Inserted #${cardFacesCreatedCount} ScryfallCardFace records`,
        );
        this.logger.debug(`Finished #${i + 1} of ${totalBatches}`);
      }
      this.logger.debug(`Finished processing card face data`);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }
    job.moveToCompleted('done', true);
  }
}
