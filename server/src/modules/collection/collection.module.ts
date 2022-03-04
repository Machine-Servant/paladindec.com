import { Module } from '@nestjs/common';
import { CollectionService } from './services/collection.service';
import { CollectionResolver } from './resolvers/collection.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { CardModule } from '../card/card.module';
import { CardsInCollectionService } from './services/cards-in-collection.service';
import { CardsInCollectionResolver } from './resolvers/cards-in-collection.resolver';
import { ScryfallModule } from '../scryfall/scryfall.module';

@Module({
  imports: [PrismaModule, CardModule, ScryfallModule],
  providers: [
    CollectionService,
    CollectionResolver,
    CardsInCollectionService,
    CardsInCollectionResolver,
  ],
})
export class CollectionModule {}
