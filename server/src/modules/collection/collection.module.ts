import { forwardRef, Module } from '@nestjs/common';
import { CollectionService } from './services/collection.service';
import { CollectionResolver } from './resolvers/collection.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { CardModule } from '../card/card.module';
import { CardsInCollectionService } from './services/cards-in-collection.service';
import { CardsInCollectionResolver } from './resolvers/cards-in-collection.resolver';
import { ScryfallModule } from '../scryfall/scryfall.module';
import { TagModule } from '../tag/tag.module';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => CardModule),
    ScryfallModule,
    forwardRef(() => TagModule),
  ],
  providers: [
    CollectionService,
    CollectionResolver,
    CardsInCollectionService,
    CardsInCollectionResolver,
  ],
  exports: [CollectionService, CardsInCollectionService],
})
export class CollectionModule {}
