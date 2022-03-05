import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Job, Queue } from 'bull';
import * as fs from 'fs';
import { chunk, flatten } from 'lodash';
import {
  ScryfallCard,
  ScryfallCardFace,
  ScryfallRelatedCard,
} from 'prisma/prisma-client';
import * as stream from 'stream';
import Chain, { chain } from 'stream-chain';
import { parser } from 'stream-json/Parser';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { promisify } from 'util';
import { ScryfallCardFaceService } from '../services/scryfall-card-face.service';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallRelatedCardService } from '../services/scryfall-related-card.service';
import { SetDataService } from '../services/set-data.service';
import { ScryfallCardDataType } from '../types/scryfall.types';
import { toCardObjectType } from '../utils/to-prisma-card';
import { toCardFaceObjectType } from '../utils/to-prisma-scryfall-card-face';
import { toPrismaScryfallRelatedCard } from '../utils/to-prisma-scryfall-related-card';
import { S3 } from '@aws-sdk/client-s3';

const finished = promisify(stream.finished);

type BulkScryfallRelatedCard = Omit<ScryfallRelatedCard, 'id'>;
type BulkScryfallCardFace = Omit<ScryfallCardFace, 'id'>;

function isBulkScryfallRelatedCard(
  input: Partial<BulkScryfallRelatedCard>,
): input is BulkScryfallRelatedCard {
  return !!input.cardId && !!input.referenceId;
}

function isBulkScryfallCardFace(
  input: Partial<BulkScryfallCardFace>,
): input is BulkScryfallCardFace {
  return !!input.cardId;
}

@Processor('bulk-data')
export class BulkDownloadConsumer {
  constructor(
    private readonly configService: ConfigService,
    private readonly scryfallCardService: ScryfallCardService,
    private readonly scryfallCardFaceService: ScryfallCardFaceService,
    private readonly scryfallRelatedCardService: ScryfallRelatedCardService,
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
    job: Job<{ uri: string; contentType: string; typeName: string }>,
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

    this.logger.debug(`Downloadindg ${uri}`);
    let results: AxiosResponse<any>;
    try {
      results = await axios.get(uri, { responseType: 'json' });
      this.logger.debug(`Done downloading data`, `status: ${results.status}`);
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    if (results.status !== 200) {
      const err = new Error(`Got ${results.status} when downloading`);
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    this.logger.debug(`Beginning upload to s3`);
    await new Promise((resolve, reject) => {
      s3.putObject(
        {
          Bucket: this.configService.get<string>('BUCKETEER_BUCKET_NAME'),
          Body: JSON.stringify(results.data),
          Key: `${this.configService.get<string>(
            'DOWNLOADS_DIR',
          )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}`,
        },
        (err, data) => {
          this.logger.debug(`Upload to s3 complete`);
          if (err) {
            this.logger.error(err);
            job.moveToFailed(err);
            reject(err);
            throw err;
          }
          this.logger.debug(`Successfully downloaded bulk data to S3`);
          job.moveToCompleted('done', true);
          resolve(true);
        },
      );
    });

    // const outputFilePath = `${this.configService.get<string>(
    //   'DOWNLOADS_DIR',
    // )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}_${
    //   job.data.typeName
    // }.json`;
    // const writer = fs.createWriteStream(outputFilePath);

    // this.logger.debug(`Starting download of: ${job.data.uri}`);

    // const response = await axios.get(uri, {
    //   method: 'get',
    //   responseType: 'stream',
    // });

    // writer.on('finish', () => {
    //   this.logger.debug('Download complete');
    // });

    // response.data.pipe(writer);

    // await finished(writer);

    // const results = { filePath: outputFilePath };

    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-expect-error
    // job.moveToCompleted(results, true);

    // return

    // return { filePath: outputFilePath };
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
        Key: 'downloads/bulk_data',
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

    const results = await new Promise((resolve, reject) => {
      const cards: ScryfallCard[] = [];
      let cardFaceData: BulkScryfallCardFace[] = [];
      let relatedCardData: BulkScryfallRelatedCard[] = [];

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
          count++;
          cards.push(toCardObjectType(value));
          if (value.card_faces?.length) {
            const cardFaces = value.card_faces.map((input) => {
              const cardFace = toCardFaceObjectType(input);
              cardFace.cardId = value.id;
              if (!isBulkScryfallCardFace(cardFace)) {
                this.logger.error('Invalid BulkScryfallCardFace', cardFace);
                throw new Error('Invalid BulkScryfallCardFace');
              }
              return cardFace;
            });
            cardFaceData = cardFaceData.concat(cardFaces);
          }
          if (value.all_parts?.length) {
            const relatedCards = value.all_parts.map((input) => {
              const relatedCard = toPrismaScryfallRelatedCard(input);
              relatedCard.id = undefined;
              relatedCard.cardId = value.id;
              relatedCard.referenceId = input.id;
              if (!isBulkScryfallRelatedCard(relatedCard)) {
                this.logger.error(
                  `Invalid BulkScryfallRelatedCard`,
                  relatedCard,
                );
                throw new Error('Invalid BulkScryfallRelatedCard.');
              }
              return relatedCard;
            });
            relatedCardData = relatedCardData.concat(relatedCards);
          }
        },
      );

      pipeline.on('end', async () => {
        this.logger.debug(`Processed ${count} objects`);

        await this.processCards(cards);
        await this.processCardFaces(cardFaceData);
        await this.processAllParts(relatedCardData);

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

  async processCards(cards: ScryfallCard[]) {
    this.logger.debug(`Processing PaladinDeck Card objects from data`);
    this.logger.debug(`Processing #${cards.length} objects`);

    try {
      const batches = chunk(cards, 100);
      const batchesLength = batches.length;
      let batchCount = 0;

      while (batches.length) {
        this.logger.debug(
          `Processing batch #${++batchCount} (of #${batchesLength})`,
        );
        const batch = batches.shift();
        await Promise.all(
          batch.map(async (card) => {
            return await this.scryfallCardService.upsert(card);
          }),
        );
        this.logger.debug(`Batch #${batchCount} complete`);
      }
      this.logger.debug(`Done processing PaladinDeck Card objects`);
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async processCardFaces(cardFaceData: BulkScryfallCardFace[]) {
    this.logger.debug(`Processing CardFace objects`);

    try {
      this.logger.debug(`Deleting old references`);
      const countDeleted = await this.scryfallCardFaceService.drop();
      this.logger.debug(`Deleted #${countDeleted} CardFace records`);
    } catch (err) {
      this.logger.error(err);
      throw err;
    }

    try {
      let batchCount = 0;
      const batches = chunk(cardFaceData, 100);
      const results: ScryfallCardFace[][] = [];

      while (batches.length) {
        this.logger.debug(`Processing batch #${++batchCount}`);
        const batch = batches.shift();
        const result = await Promise.all(
          batch.map(
            async (cardFace) =>
              // TODO: FIX THIS ANY
              await this.scryfallCardFaceService.create(cardFace as any),
          ),
        );
        results.push(result);
      }
      const flatResults = flatten(results);
      this.logger.debug(`Processed ${flatResults.length} CardFace records`);

      return flatResults;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async processAllParts(allPartsData: BulkScryfallRelatedCard[]) {
    this.logger.debug(`Processing RelatedCard objects`);

    try {
      this.logger.debug(`Deleting old references`);
      const countDeleted = await this.scryfallRelatedCardService.drop();
      this.logger.debug(`Deleted #${countDeleted} RelatedCard records`);
    } catch (err) {
      this.logger.error(err);
      throw err;
    }

    try {
      let batchCount = 0;
      const batches = chunk(allPartsData, 100);
      const results: ScryfallRelatedCard[][] = [];

      while (batches.length) {
        this.logger.debug(`Processing batch ${++batchCount}`);
        const batch = batches.shift();
        const result = await Promise.all(
          batch.map(
            async (relatedCard) =>
              await this.scryfallRelatedCardService.create(relatedCard),
          ),
        );
        results.push(result);
      }
      const flatResults = flatten(results);
      this.logger.debug(`Processed ${flatResults.length} RelatedCard records`);

      return flatResults;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}
