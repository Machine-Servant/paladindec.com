import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { SetService } from '../../set/services/set.service';
import { toSetObjectType } from '../../set/util/to-set-object-type';
import { SetDataType } from '../types/scryfall.types';

@Processor('set-data')
export class SetConsumer {
  constructor(private readonly setService: SetService) {}

  private readonly logger = new Logger(SetConsumer.name);

  @Process('process')
  async processSetData(job: Job<{ data: SetDataType[] }>) {
    this.logger.debug(`Processing set data (${job.data.data.length} entries)`);
    const setObjects = job.data.data.map((setRaw) => toSetObjectType(setRaw));
    await this.setService.bulkUpsert(setObjects);
    this.logger.debug(`Processing set data complete`);
  }
}
