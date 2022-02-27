import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import { flatten } from 'lodash';
import { CardService } from '../../card/services/card.service';
import { toCardFaceObjectType } from '../../card/utils/to-card-face-object-type';
import { toRelatedCardObjectType } from '../../card/utils/to-related-card-object-type';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import {
  BulkDataResponseType,
  BulkDataType,
  CardFaceDataType,
  RelatedCardDataType,
} from '../types/scryfall.types';

@Injectable()
export class BulkDataService {
  constructor(
    private readonly configService: ConfigService,
    private readonly cardService: CardService,
    @InjectQueue('bulk-data') private readonly bulkDataQueue: Queue,
  ) {}

  async getBulkData(): Promise<BulkDataObjectType[]> {
    const results = await axios.get<BulkDataResponseType>(
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
    const results = await axios.get<BulkDataType>(
      `${this.configService.get<string>(
        'SCRYFALL_API_URI',
      )}/bulk-data/${typeName}`,
    );

    await this.bulkDataQueue.add('download', {
      uri: results.data.download_uri,
      contentType: results.data.content_type,
      typeName,
    });

    return true;
  }

  async process(fileName: string): Promise<boolean> {
    const filePath = `${this.configService.get<string>(
      'DOWNLOADS_DIR',
    )}/${fileName}`;
    await this.bulkDataQueue.add('process', { filePath });
    return true;
  }

  async processCardFaceData(): Promise<boolean> {
    const cardsWithCardFaces = await this.cardService.findMany({
      cardFacesRaw: { isEmpty: false },
    });
    await this.bulkDataQueue.add('process-card-faces', {
      cardFaceData: flatten(
        cardsWithCardFaces.map((card) =>
          (card.cardFacesRaw as CardFaceDataType[]).map((cf) => {
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
    const cardsWithAllParts = await this.cardService.findMany({
      allParts: { isEmpty: false },
    });
    await this.bulkDataQueue.add('process-all-parts', {
      allPartsData: flatten(
        cardsWithAllParts.map((card) =>
          (card.allParts as RelatedCardDataType[]).map((ap) => {
            const relatedCard = toRelatedCardObjectType(ap);
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
