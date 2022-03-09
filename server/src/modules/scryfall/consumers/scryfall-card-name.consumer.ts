import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { Job } from 'bull';
import stream from 'stream';
import Chain, { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { ScryfallCardNameService } from '../services/scryfall-card-name.service';

@Processor('card-name')
export class ScryfallCardNameConsumer {
  constructor(
    private readonly scryfallCardNameService: ScryfallCardNameService,
    private readonly configService: ConfigService,
  ) {}

  private readonly logger = new Logger(ScryfallCardNameConsumer.name);

  @Process('process')
  async processCardNames(job: Job) {
    const uri = `${this.configService.get<string>(
      'SCRYFALL_API_URI',
    )}/catalog/card-names`;
    const fetchData = async () => axios.get(uri, { responseType: 'json' });

    try {
      this.logger.debug(`Dropping old card name data`);
      await this.scryfallCardNameService.drop();

      this.logger.debug(`Fetching new card name data`);
      const cardNameData = await fetchData();

      await new Promise(async (resolve, reject) => {
        let count = 0;
        let buffer: string[] = [];

        try {
          for (const cardName of cardNameData.data.data) {
            if (buffer.length < 1000) {
              buffer.push(cardName);
            } else {
              this.logger.debug(
                `Creating batch of 1000 card names #${++count}`,
              );
              await new Promise((resolve) =>
                setTimeout(() => resolve(true), 100),
              );
              const cardNamesCreatedCount =
                await this.scryfallCardNameService.createMany(
                  buffer.map((name) => ({ name })),
                );
              this.logger.debug(
                `Created #${cardNamesCreatedCount.count} cards`,
              );
              buffer = [];
            }
          }

          if (buffer.length > 0) {
            this.logger.debug(
              `Finishing processing of #${buffer.length} remaining card names`,
            );
            await this.scryfallCardNameService.createMany(
              buffer.map((name) => ({ name })),
            );
            buffer = [];
            resolve(true);
          }
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      this.logger.error(err);
      job.moveToFailed(err);
      throw err;
    }

    this.logger.debug(`Finished processing card names`);

    job.moveToCompleted('done', true);
  }
}
