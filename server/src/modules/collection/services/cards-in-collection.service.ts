import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CardsInCollection } from '@prisma/client';
import { CardsInCollectionUpdateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-update.input';
import { DeleteOneCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/delete-one-cards-in-collection.args';
import { FindFirstCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-first-cards-in-collection.args';
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

  private readonly logger = new Logger(CardsInCollectionService.name);

  async update(
    id: string,
    userId: string,
    input?: CardsInCollectionUpdateInput,
  ): Promise<CardsInCollection> {
    const found = await this.prismaService.cardsInCollection.findFirst({
      where: {
        id,
        collection: {
          userId,
        },
      },
    });

    if (!found) {
      throw new NotFoundException(`CardInCollection #${id} not found`);
    }

    return this.prismaService.cardsInCollection.update({
      where: {
        id,
      },
      data: input,
    });
  }

  async findOne(
    args: FindFirstCardsInCollectionArgs,
    userId: string,
  ): Promise<CardsInCollection> {
    return this.prismaService.cardsInCollection.findFirst({
      where: {
        ...args.where,
        collection: {
          user: {
            id: { equals: userId },
          },
        },
      },
    });
  }

  async delete(
    args: DeleteOneCardsInCollectionArgs,
    userId: string,
  ): Promise<CardsInCollection> {
    const found = await this.findUnique(args);

    if (!found) {
      this.logger.error(`Could not find card in collection`, args);
      throw new NotFoundException(`Could not find card in collection`);
    }

    const collection = this.collectionService.findOne(
      { where: { id: { equals: found.collectionId } } },
      userId,
    );

    if (!collection) {
      this.logger.error(
        `Collection #${found.collectionId} not found for user`,
        args,
        userId,
      );
      throw new NotFoundException(`Could not find card in collection`);
    }

    return this.prismaService.cardsInCollection.delete(args);
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

  async findManyOrderedByPrice(
    userId: string,
    args?: FindManyCardsInCollectionArgs,
  ): Promise<CardsInCollection[]> {
    const { take, skip, orderBy, ...otherArgs } = args;

    if (!orderBy) return this.findMany(userId, args);

    const results = await this.prismaService.cardsInCollection.findMany({
      ...otherArgs,
      where: { ...otherArgs.where, collection: { userId: { equals: userId } } },
      include: { card: { include: { currentPrice: true } } },
      orderBy: orderBy.filter((ob) => ob.card === undefined),
    });

    const orderByPriceOpts = orderBy.find(
      (option) => option?.card?.currentPrice?.usd,
    );

    let sorted = results;
    if (orderByPriceOpts?.card?.currentPrice?.usd) {
      sorted = results.sort((a, b) => {
        const priceA = a.isEtched
          ? a.card.currentPrice.usdEtched
          : a.isFoil
          ? a.card.currentPrice.usdFoil
          : a.card.currentPrice.usd;
        const priceB = b.isEtched
          ? b.card.currentPrice.usdEtched
          : b.isFoil
          ? b.card.currentPrice.usdFoil
          : b.card.currentPrice.usd;
        return orderByPriceOpts.card.currentPrice.usd === 'asc'
          ? priceA - priceB
          : priceB - priceA;
      });
    }

    if (take && skip) {
      return sorted.slice(skip, skip + take + 1);
    } else if (take) {
      return sorted.slice(0, take + 1);
    } else if (skip) {
      return sorted.slice(skip);
    }

    return sorted;
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
