import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import { flatten } from 'lodash';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import {
  ScryfallBulkDataResponseType,
  ScryfallBulkDataType,
  ScryfallRelatedCardDataType,
} from '../types/scryfall.types';
import { toPrismaScryfallRelatedCard } from '../utils/to-prisma-scryfall-related-card';
import { ScryfallCardService } from './scryfall-card.service';

@Injectable()
export class BulkDataService {
  constructor(
    private readonly configService: ConfigService,
    private readonly scryfallCardService: ScryfallCardService,
    @InjectQueue('bulk-data') private readonly bulkDataQueue: Queue,
  ) {}

  private readonly logger = new Logger(BulkDataService.name);

  async getBulkData(): Promise<BulkDataObjectType[]> {
    const results = await axios.get<ScryfallBulkDataResponseType>(
      `${this.configService.get<string>('SCRYFALL_API_URI')}/bulk-data`,
    );

    return results.data.data.map((item) => {
      const {
        updated_at,
        compressed_size,
        download_uri,
        content_type,
        content_encoding,
        ...rest
      } = item;
      return {
        ...rest,
        updatedAt: new Date(updated_at),
        compressedSize: compressed_size,
        downloadUri: download_uri,
        contentType: content_type,
        contentEncoding: content_encoding,
      };
    });
  }

  async download(typeName: string): Promise<boolean> {
    this.logger.debug(`Getting bulk data information from scryfall`);
    const results = await axios.get<ScryfallBulkDataType>(
      `${this.configService.get<string>(
        'SCRYFALL_API_URI',
      )}/bulk-data/${typeName}`,
    );

    this.logger.debug(
      `Queueing download`,
      `uri: ${results.data.download_uri}`,
      `contentType: ${results.data.content_type}`,
    );
    await this.bulkDataQueue.add('download', {
      uri: results.data.download_uri,
      contentType: results.data.content_type,
      typeName,
    });

    return true;
  }

  async process(): Promise<boolean> {
    this.logger.debug(`Getting bulk data object`);
    const results = await axios.get<ScryfallBulkDataType>(
      `${this.configService.get<string>(
        'SCRYFALL_API_URI',
      )}/bulk-data/default_cards`,
    );

    this.logger.debug(`Adding to queue`);
    try {
      await this.bulkDataQueue.add('process', {
        uri: results.data.download_uri,
        contentType: results.data.content_type,
        typeName: 'default_cards',
      });
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
    this.logger.debug(`Done adding to queue`);

    return true;
  }

  async processBulkData(): Promise<boolean> {
    await this.bulkDataQueue.add('process-bulk-data');
    return true;
  }

  async processCardFaceData(): Promise<boolean> {
    await this.bulkDataQueue.add('process-card-faces');
    return true;
  }

  async processAllPartsData(): Promise<boolean> {
    const cardsWithAllParts = await this.scryfallCardService.findMany({
      where: { allParts: { isEmpty: false } },
    });
    await this.bulkDataQueue.add('process-all-parts', {
      allPartsData: flatten(
        cardsWithAllParts.map((card) =>
          (card.allParts as ScryfallRelatedCardDataType[]).map((ap) => {
            const relatedCard = toPrismaScryfallRelatedCard(ap);
            relatedCard.id = undefined;
            relatedCard.referenceId = ap.id;
            relatedCard.cardId = card.id;
            return relatedCard;
          }),
        ),
      ),
    });
    return true;
  }
}
