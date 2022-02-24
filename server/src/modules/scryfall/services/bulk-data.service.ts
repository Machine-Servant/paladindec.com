import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import { BulkDataObjectType } from '../object-types/bulk-data.object-type';
import { BulkDataResponseType, BulkDataType } from '../types/scryfall.types';

@Injectable()
export class BulkDataService {
  constructor(
    private readonly configService: ConfigService,
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
}
