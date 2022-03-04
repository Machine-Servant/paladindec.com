import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Queue } from 'bull';
import {
  ScryfallSetDataListResponseType,
  ScryfallSetDataType,
} from '../types/scryfall.types';

@Injectable()
export class SetDataService {
  constructor(
    private readonly configService: ConfigService,
    @InjectQueue('set-data') private readonly setDataQueue: Queue,
  ) {}

  async getSetData(): Promise<ScryfallSetDataType[]> {
    const results = await axios.get<ScryfallSetDataListResponseType>(
      `${this.configService.get<string>('SCRYFALL_API_URI')}/sets`,
    );

    return results.data.data;
  }

  async process(): Promise<boolean> {
    const data = await this.getSetData();
    await this.setDataQueue.add('process', { data });
    return true;
  }
}
