import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Job } from 'bull';
import * as fs from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { chain } from 'stream-chain';
import { parser } from 'stream-json/Parser';

const finished = promisify(stream.finished);

@Processor('bulk-data')
export class BulkDownloadConsumer {
  constructor(private readonly configService: ConfigService) {}

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
      pipeline.on('data', () => {
        count++;
      });

      pipeline.on('end', () => {
        this.logger.debug(`Processed ${count} objects`);
        resolve(true);
      });

      pipeline.on('error', (err) => {
        this.logger.error('error', err);
        reject(err);
      });
    });
  }
}
