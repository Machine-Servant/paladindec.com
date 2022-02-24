import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BulkDownloadConsumer } from './consumers/bulk-download.consumer';
import { ScryfallResolver } from './resolvers/scryfall.resolver';
import { BulkDataService } from './services/bulk-data.service';

@Module({
  imports: [BullModule.registerQueue({ name: 'bulk-data' }), ConfigModule],
  providers: [BulkDataService, ScryfallResolver, BulkDownloadConsumer],
})
export class ScryfallModule {}
