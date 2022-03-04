import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { toPrismaScryfallSet } from '../utils/to-prisma-scryfall-set';
import { ScryfallSetService } from '../services/scryfall-set.service';
import { ScryfallSetDataType } from '../types/scryfall.types';

@Processor('set-data')
export class ScryfallSetConsumer {
  constructor(private readonly scryfallSetService: ScryfallSetService) {}

  private readonly logger = new Logger(ScryfallSetConsumer.name);

  @Process('process')
  async processSetData(job: Job<{ data: ScryfallSetDataType[] }>) {
    this.logger.debug(`Processing set data (${job.data.data.length} entries)`);
    const setObjects = job.data.data.map((setRaw) =>
      toPrismaScryfallSet(setRaw),
    );
    await this.scryfallSetService.bulkUpsert(setObjects);
    this.logger.debug(`Processing set data complete`);
    job.moveToCompleted('done', true);
    return true;
  }
}
