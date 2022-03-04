import { forwardRef, Module } from '@nestjs/common';
import { CardService } from './services/card.service';
import { CardResolver } from './resolvers/card.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { BullModule } from '@nestjs/bull';
import { ScryfallModule } from '../scryfall/scryfall.module';
import { CardConsumer } from './consumers/card.consumer';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => ScryfallModule),
    BullModule.registerQueue({ name: 'card' }),
  ],
  providers: [CardService, CardResolver, CardConsumer],
  exports: [CardService],
})
export class CardModule {}
