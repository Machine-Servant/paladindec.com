import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import { SetDataListResponseType, SetDataType } from '../types/scryfall.types';

@Injectable()
export class SetDataService {
  constructor(
    private readonly configService: ConfigService,
    @InjectQueue('set-data') private readonly setDataQueue: Queue,
  ) {}

  private async getSetData(): Promise<SetDataType[]> {
    const results = await axios.get<SetDataListResponseType>(
      `${this.configService.get<string>('SCRYFALL_API_URI')}/sets`,
    );

    return results.data.data;
  }

  async process(): Promise<boolean> {
    const data = await this.getSetData();
    await this.setDataQueue.add('process', { data });
    console.log('added to queue');
    return true;
  }
}
