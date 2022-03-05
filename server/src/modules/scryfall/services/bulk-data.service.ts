import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import { flatten } from 'lodash';
import { toCardFaceObjectType } from '../utils/to-prisma-scryfall-card-face';
import { toPrismaScryfallRelatedCard } from '../utils/to-prisma-scryfall-related-card';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import {
  ScryfallBulkDataResponseType,
  ScryfallBulkDataType,
  ScryfallCardFaceDataType,
  ScryfallRelatedCardDataType,
} from '../types/scryfall.types';
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
    const results = await axios.get<ScryfallBulkDataType>(
      `${this.configService.get<string>(
        'SCRYFALL_API_URI',
      )}/bulk-data/default_cards`,
    );

    await this.bulkDataQueue.add('process', {
      uri: results.data.download_uri,
      contentType: results.data.content_type,
      typeName: 'default_cards',
    });

    return true;
  }

  async processBulkData(fileName: string): Promise<boolean> {
    const filePath = `${this.configService.get<string>(
      'DOWNLOADS_DIR',
    )}/${fileName}`;
    await this.bulkDataQueue.add('process-bulk-data', { filePath });
    return true;
  }

  async processCardFaceData(): Promise<boolean> {
    const cardsWithCardFaces = await this.scryfallCardService.findMany({
      where: {
        cardFacesRaw: { isEmpty: false },
      },
    });
    await this.bulkDataQueue.add('process-card-faces', {
      cardFaceData: flatten(
        cardsWithCardFaces.map((card) =>
          (card.cardFacesRaw as ScryfallCardFaceDataType[]).map((cf) => {
            const cardFace = toCardFaceObjectType(cf);
            cardFace.cardId = card.id;
            return cardFace;
          }),
        ),
      ),
    });
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
