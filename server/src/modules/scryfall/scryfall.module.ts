import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { BulkDownloadConsumer } from './consumers/bulk-download.consumer';
import { ScryfallSetConsumer } from './consumers/scryfall-set.consumer';
import { ScryfallCardResolver } from './resolvers/scryfall-card.resolver';
import { ScryfallRelatedCardResolver } from './resolvers/scryfall-related-card.resolver';
import { ScryfallSetResolver } from './resolvers/scryfall-set.resolver';
import { ScryfallResolver } from './resolvers/scryfall.resolver';
import { BulkDataService } from './services/bulk-data.service';
import { ScryfallCardFaceService } from './services/scryfall-card-face.service';
import { ScryfallCardService } from './services/scryfall-card.service';
import { ScryfallRelatedCardService } from './services/scryfall-related-card.service';
import { ScryfallSetService } from './services/scryfall-set.service';
import { SetDataService } from './services/set-data.service';
import { ScryfallPriceService } from './services/scryfall-price.service';
import { ScryfallPriceConsumer } from './consumers/scryfall-price.consumer';
import { ScryfallPriceResolver } from './resolvers/scryfall-price.resolver';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({ name: 'bulk-data' }),
    BullModule.registerQueue({ name: 'set-data' }),
    BullModule.registerQueue({ name: 'price-data' }),
    ConfigModule,
  ],
  providers: [
    BulkDataService,
    ScryfallResolver,
    BulkDownloadConsumer,
    ScryfallSetConsumer,
    SetDataService,
    ScryfallSetResolver,
    ScryfallSetService,
    ScryfallCardService,
    ScryfallRelatedCardService,
    ScryfallRelatedCardResolver,
    ScryfallCardResolver,
    ScryfallCardFaceService,
    ScryfallPriceService,
    ScryfallPriceConsumer,
    ScryfallPriceResolver,
  ],
  exports: [ScryfallPriceService, ScryfallCardService],
})
export class ScryfallModule {}
