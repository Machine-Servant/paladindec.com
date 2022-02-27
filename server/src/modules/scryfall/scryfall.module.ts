import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from '../card/card.module';
import { SetModule } from '../set/set.module';
import { BulkDownloadConsumer } from './consumers/bulk-download.consumer';
import { SetConsumer } from './consumers/set.consumer';
import { ScryfallResolver } from './resolvers/scryfall.resolver';
import { BulkDataService } from './services/bulk-data.service';
import { SetDataService } from './services/set-data.service';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'bulk-data' }),
    BullModule.registerQueue({ name: 'set-data' }),
    SetModule,
    CardModule,
    ConfigModule,
  ],
  providers: [
    BulkDataService,
    ScryfallResolver,
    BulkDownloadConsumer,
    SetConsumer,
    SetDataService,
  ],
})
export class ScryfallModule {}
