import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Job, Queue } from 'bull';
import * as fs from 'fs';
import { chunk, flatten } from 'lodash';
import {
  ScryfallCard,
  ScryfallCardFace,
  ScryfallRelatedCard,
} from 'prisma/prisma-client';
import * as stream from 'stream';
import { chain } from 'stream-chain';
import { parser } from 'stream-json/Parser';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { promisify } from 'util';
import { toCardObjectType } from '../utils/to-prisma-card';
import { toCardFaceObjectType } from '../utils/to-prisma-scryfall-card-face';
import { toPrismaScryfallRelatedCard } from '../utils/to-prisma-scryfall-related-card';
import { ScryfallCardDataType } from '../types/scryfall.types';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallCardFaceService } from '../services/scryfall-card-face.service';
import { ScryfallRelatedCardService } from '../services/scryfall-related-card.service';

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
    @InjectQueue('bulk-data') private readonly bulkDataQueue: Queue,
  ) {}

  private readonly logger = new Logger(BulkDownloadConsumer.name);

  @Process('download')
  async downloadBulkData(
    job: Job<{ uri: string; contentType: string; typeName: string }>,
  ) {
    const { uri, contentType } = job.data;

    if (contentType !== 'application/json') {
      throw new Error(
        `Bulk data content type must be "application/json", got ${contentType} instead.`,
      );
    }

    const outputFilePath = `${this.configService.get<string>(
      'DOWNLOADS_DIR',
    )}/${this.configService.get<string>('BULK_DATA_FILE_NAME')}_${
      job.data.typeName
    }.json`;
    const writer = fs.createWriteStream(outputFilePath);

    this.logger.debug(`Starting download of: ${job.data.uri}`);

    const response = await axios.get(uri, {
      method: 'get',
      responseType: 'stream',
    });

    writer.on('finish', () => {
      this.logger.debug('Download complete');
    });

    response.data.pipe(writer);

    return finished(writer);
  }

  @Process('process')
  async processBulkData(job: Job<{ filePath: string }>) {
    this.logger.debug(`Processing ${job.data.filePath}`);

    const pipeline = chain([
      fs.createReadStream(job.data.filePath),
      parser(),
      streamArray(),
    ]);

    let count = 0;

    return new Promise((resolve, reject) => {
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
        try {
          await this.bulkDataQueue.add('process-cards', {
            cards,
            cardFaceData,
            relatedCardData,
          });
        } catch (err) {
          this.logger.error(err);
          throw err;
        }
        resolve(true);
      });

      pipeline.on('error', (err) => {
        this.logger.error('error', err);
        reject(err);
      });
    });
  }

  @Process('process-cards')
  async processCards(
    job: Job<{
      cards: ScryfallCard[];
      cardFaceData: BulkScryfallCardFace[];
      relatedCardData: BulkScryfallRelatedCard[];
    }>,
  ) {
    this.logger.debug(
      `Processing all Card objects (${job.data.cards.length} Card records)`,
    );

    let batchCount = 0;

    const batches = chunk(job.data.cards, 100);
    const results: ScryfallCard[][] = [];

    try {
      while (batches.length) {
        this.logger.debug(`Processing batch #${++batchCount}`);
        const batch = batches.shift();
        const result = await Promise.all(
          batch.map(async (card) => {
            return await this.scryfallCardService.upsert(card);
          }),
        );
        results.push(result);
        this.logger.debug(`Batch ${batchCount} finished`);
      }
      this.logger.debug(
        `Done processing cards (Processed ${flatten(results).length} records)`,
      );
    } catch (err) {
      this.logger.error(err);
      throw err;
    }

    await this.bulkDataQueue.add('process-card-faces', {
      cardFaceData: job.data.cardFaceData,
    });

    await this.bulkDataQueue.add('process-all-parts', {
      allPartsData: job.data.relatedCardData,
    });
  }

  @Process('process-card-faces')
  async processCardFaces(job: Job<{ cardFaceData: BulkScryfallCardFace[] }>) {
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
      const batches = chunk(job.data.cardFaceData, 100);
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

  @Process('process-all-parts')
  async processAllParts(job: Job<{ allPartsData: BulkScryfallRelatedCard[] }>) {
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
      const batches = chunk(job.data.allPartsData, 100);
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
