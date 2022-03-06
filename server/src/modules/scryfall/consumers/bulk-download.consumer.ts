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
import {
  CompleteMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
  Part,
  PutObjectCommandOutput,
  S3,
  UploadPartCommandInput,
} from '@aws-sdk/client-s3';

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

    // try {
    //   this.logger.debug(`Downloading bulk data`);
    //   const download = await this.bulkDataQueue.add('download', job.data, {
    //     removeOnComplete: true,
    //   });
    //   await download.finished();
    //   this.logger.debug(`Done downloading data`);
    // } catch (err) {
    //   this.logger.error(err);
    //   job.moveToFailed(err);
    //   throw err;
    // }

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
      s3.completeMultipartUpload(doneParams, (err, data) => {
        if (err) {
          this.logger.error(err);
          job.moveToFailed(err);
          throw err;
        }

        this.logger.debug(`Completed upload`);
        // job.moveToCompleted('done', true);
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

    /*
        const buffer = Buffer.from(fileResponse.data)
        const results = await s3.createMultipartUpload({
          Bucket: this.configService.get<string>('BUCKETEER_BUCKET_NAME'),
          Key: `${this.configService.get<string>(
            'DOWNLOADS_DIR',
          )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}.json`,
          ContentType: fileResponse.headers['content-type'],
        }, (err, multipart) => {
          fileResponse
        })
    */

    // const uploadFromStream = (
    //   fileResponse: AxiosResponse<stream.Stream>,
    // ): {
    //   passthrough: stream.PassThrough;
    //   promise: Promise<PutObjectCommandOutput>;
    // } => {
    //   this.logger.debug(`Uploading data to S3`);
    //   const passthrough = new stream.PassThrough();
    //   try {
    //     const results = s3.putObject({
    //       Bucket: this.configService.get<string>('BUCKETEER_BUCKET_NAME'),
    //       Key: `${this.configService.get<string>(
    //         'DOWNLOADS_DIR',
    //       )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}.json`,
    //       ContentType: fileResponse.headers['content-type'],
    //       Body: passthrough,
    //     });
    //     return { passthrough, promise: results };
    //   } catch (err) {
    //     this.logger.error(err);
    //     throw err;
    //   }
    // };

    // this.logger.debug(`Downloading file ${uri}`);
    // const responseStream = await downloadFile(uri);
    // this.logger.debug(`Done with downloadFile`);
    // this.logger.debug(`Beginning upload to S3`);
    // try {
    //   const { passthrough, promise } = uploadFromStream(responseStream);
    //   responseStream.data.pipe(passthrough);
    //   await promise;
    //   job.moveToCompleted('done', true);
    //   this.logger.debug(`Done uploading to S3`);
    // } catch (err) {
    //   this.logger.error(err);
    //   job.moveToFailed(err);
    //   throw err;
    // }

    // this.logger.debug(`Downloadindg ${uri}`);
    // let results: AxiosResponse<any>;
    // try {
    //   results = await axios.get(uri, { responseType: 'stream' });
    //   this.logger.debug(`Done downloading data`, `status: ${results.status}`);
    // } catch (err) {
    //   this.logger.error(err);
    //   job.moveToFailed(err);
    //   throw err;
    // }

    // if (results.status !== 200) {
    //   const err = new Error(`Got ${results.status} when downloading`);
    //   this.logger.error(err);
    //   job.moveToFailed(err);
    //   throw err;
    // }

    // this.logger.debug(`Beginning upload to s3`);
    // await new Promise((resolve, reject) => {
    //   s3.putObject(
    //     {
    //       Bucket: this.configService.get<string>('BUCKETEER_BUCKET_NAME'),
    //       Body: results.data,
    //       Key: `${this.configService.get<string>(
    //         'DOWNLOADS_DIR',
    //       )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}`,
    //     },
    //     (err, data) => {
    //       this.logger.debug(`Upload to s3 complete`);
    //       if (err) {
    //         this.logger.error(err);
    //         job.moveToFailed(err);
    //         reject(err);
    //         throw err;
    //       }
    //       this.logger.debug(`Successfully downloaded bulk data to S3`);
    //       job.moveToCompleted('done', true);
    //       resolve(true);
    //     },
    //   );
    // });

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
      // const buffer = [];
      let cards: ScryfallCard[] = [];
      // let cardFaceData: BulkScryfallCardFace[] = [];
      // let relatedCardData: BulkScryfallRelatedCard[] = [];

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
          // buffer.push(value);
          // this.logger.debug(`Processing ${value.id}`);
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
          // cards.push(toCardObjectType(value));
          // if (value.card_faces?.length) {
          //   const cardFaces = value.card_faces.map((input) => {
          //     const cardFace = toCardFaceObjectType(input);
          //     cardFace.cardId = value.id;
          //     if (!isBulkScryfallCardFace(cardFace)) {
          //       this.logger.error('Invalid BulkScryfallCardFace', cardFace);
          //       throw new Error('Invalid BulkScryfallCardFace');
          //     }
          //     return cardFace;
          //   });
          //   cardFaceData = cardFaceData.concat(cardFaces);
          // }
          // if (value.all_parts?.length) {
          //   const relatedCards = value.all_parts.map((input) => {
          //     const relatedCard = toPrismaScryfallRelatedCard(input);
          //     relatedCard.id = undefined;
          //     relatedCard.cardId = value.id;
          //     relatedCard.referenceId = input.id;
          //     if (!isBulkScryfallRelatedCard(relatedCard)) {
          //       this.logger.error(
          //         `Invalid BulkScryfallRelatedCard`,
          //         relatedCard,
          //       );
          //       throw new Error('Invalid BulkScryfallRelatedCard.');
          //     }
          //     return relatedCard;
          //   });
          //   relatedCardData = relatedCardData.concat(relatedCards);
          // }
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

        // await this.processCards(cards);
        // await this.processCardFaces(cardFaceData);
        // await this.processAllParts(relatedCardData);

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

  // async processCardFaces(cardFaceData: BulkScryfallCardFace[]) {
  //   this.logger.debug(`Processing CardFace objects`);

  //   try {
  //     this.logger.debug(`Deleting old references`);
  //     const countDeleted = await this.scryfallCardFaceService.drop();
  //     this.logger.debug(`Deleted #${countDeleted} CardFace records`);
  //   } catch (err) {
  //     this.logger.error(err);
  //     throw err;
  //   }

  //   try {
  //     let batchCount = 0;
  //     const batches = chunk(cardFaceData, 100);
  //     const results: ScryfallCardFace[][] = [];

  //     while (batches.length) {
  //       this.logger.debug(`Processing batch #${++batchCount}`);
  //       const batch = batches.shift();
  //       const result = await Promise.all(
  //         batch.map(
  //           async (cardFace) =>
  //             // TODO: FIX THIS ANY
  //             await this.scryfallCardFaceService.create(cardFace as any),
  //         ),
  //       );
  //       results.push(result);
  //     }
  //     const flatResults = flatten(results);
  //     this.logger.debug(`Processed ${flatResults.length} CardFace records`);

  //     return flatResults;
  //   } catch (err) {
  //     this.logger.error(err);
  //     throw err;
  //   }
  // }

  // async processAllParts(allPartsData: BulkScryfallRelatedCard[]) {
  //   this.logger.debug(`Processing RelatedCard objects`);

  //   try {
  //     this.logger.debug(`Deleting old references`);
  //     const countDeleted = await this.scryfallRelatedCardService.drop();
  //     this.logger.debug(`Deleted #${countDeleted} RelatedCard records`);
  //   } catch (err) {
  //     this.logger.error(err);
  //     throw err;
  //   }

  //   try {
  //     let batchCount = 0;
  //     const batches = chunk(allPartsData, 100);
  //     const results: ScryfallRelatedCard[][] = [];

  //     while (batches.length) {
  //       this.logger.debug(`Processing batch ${++batchCount}`);
  //       const batch = batches.shift();
  //       const result = await Promise.all(
  //         batch.map(
  //           async (relatedCard) =>
  //             await this.scryfallRelatedCardService.create(relatedCard),
  //         ),
  //       );
  //       results.push(result);
  //     }
  //     const flatResults = flatten(results);
  //     this.logger.debug(`Processed ${flatResults.length} RelatedCard records`);

  //     return flatResults;
  //   } catch (err) {
  //     this.logger.error(err);
  //     throw err;
  //   }
  // }
}
