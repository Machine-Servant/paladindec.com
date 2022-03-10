import { Injectable } from '@nestjs/common';
import { CardsInCollection } from '@prisma/client';
import { CardsInCollectionUncheckedUpdateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-unchecked-update.input';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class CardsInCollectionService {
  constructor(private readonly prismaService: PrismaService) {}

  async update(
    input?: CardsInCollectionUncheckedUpdateInput,
  ): Promise<CardsInCollection> {
    return this.prismaService.cardsInCollection.update({
      where: {
        cardId_collectionId: {
          cardId: input.cardId.set,
          collectionId: input.collectionId.set,
        },
      },
      data: input,
    });
  }

  async findMany(
    args?: FindManyCardsInCollectionArgs,
  ): Promise<CardsInCollection[]> {
    return this.prismaService.cardsInCollection.findMany(args);
  }

  async count(collectionId: string): Promise<number> {
    return this.prismaService.cardsInCollection.count({
      where: { collectionId: { equals: collectionId } },
    });
  }
}
