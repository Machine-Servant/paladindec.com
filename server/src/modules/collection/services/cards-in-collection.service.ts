import { Injectable, NotFoundException } from '@nestjs/common';
import { Card, CardsInCollection, Prisma } from '@prisma/client';
import { CardsInCollectionCreateWithoutCardInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-create-without-card.input';
import { CardsInCollectionCreateWithoutCollectionInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-create-without-collection.input';
import { CardsInCollectionCreateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-create.input';
import { CardsInCollectionUncheckedUpdateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-unchecked-update.input';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { FindUniqueCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-unique-cards-in-collection.args';
import { PrismaService } from '../../prisma/services/prisma.service';
import { AddCardToCollectionInput } from '../inputs/add-card-to-collection.input';
import { CollectionService } from './collection.service';

@Injectable()
export class CardsInCollectionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly collectionService: CollectionService,
  ) {}

  async update(
    input?: CardsInCollectionUncheckedUpdateInput,
  ): Promise<CardsInCollection> {
    return this.prismaService.cardsInCollection.update({
      where: {
        cardId_collectionId_isFoil_isEtched: {
          cardId: input.cardId.set,
          collectionId: input.collectionId.set,
          isEtched: input.isEtched.set,
          isFoil: input.isFoil.set,
        },
      },
      data: input,
    });
  }

  async findMany(
    userId: string,
    args?: FindManyCardsInCollectionArgs,
  ): Promise<CardsInCollection[]> {
    return this.prismaService.cardsInCollection.findMany({
      ...args,
      where: {
        ...args.where,
        collection: {
          userId: { equals: userId },
        },
      },
    });
  }

  async findUnique(
    args: FindUniqueCardsInCollectionArgs,
  ): Promise<CardsInCollection> {
    return this.prismaService.cardsInCollection.findUnique(args);
  }

  async count(collectionId: string): Promise<number> {
    return this.prismaService.cardsInCollection.count({
      where: { collectionId: { equals: collectionId } },
    });
  }

  async addCardToCollection(
    input: AddCardToCollectionInput,
    userId: string,
  ): Promise<CardsInCollection> {
    const { collectionId, cardId, isEtched, isFoil, ...otherInput } = input;

    const collection = await this.collectionService.findOne(
      { where: { id: { equals: collectionId } } },
      userId,
    );

    if (!collection) {
      throw new NotFoundException(
        `Could not find collection #${collectionId} for user #${userId}`,
      );
    }

    return this.prismaService.cardsInCollection.upsert({
      where: {
        cardId_collectionId_isFoil_isEtched: {
          cardId,
          collectionId,
          isEtched,
          isFoil,
        },
      },
      create: {
        ...otherInput,
        isEtched,
        isFoil,
        card: { connect: { id: cardId } },
        collection: { connect: { id: collectionId } },
      },
      update: {
        ...otherInput,
        count: { increment: otherInput.count },
      },
    });
  }
}
