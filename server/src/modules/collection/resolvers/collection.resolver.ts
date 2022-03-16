import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CardsInCollection } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection.model';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { CollectionCount } from '../../../@generated/prisma-nestjs-graphql/collection/collection-count.output';
import { CollectionCreateWithoutUserInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create-without-user.input';
import { CollectionCreateInput } from '../../../@generated/prisma-nestjs-graphql/collection/collection-create.input';
import { Collection } from '../../../@generated/prisma-nestjs-graphql/collection/collection.model';
import { CreateOneCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/create-one-collection.args';
import { FindFirstCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-first-collection.args';
import { FindManyCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-many-collection.args';
import { FindUniqueCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-unique-collection.args';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CardsInCollectionService } from '../services/cards-in-collection.service';
import { CollectionService } from '../services/collection.service';

@Resolver(() => Collection)
export class CollectionResolver {
  constructor(
    private readonly collectionService: CollectionService,
    private readonly cardsInCollectionService: CardsInCollectionService,
  ) {}

  @Query(() => [Collection])
  async allCollections(
    @CurrentUser() user: User,
    @Args() args?: FindManyCollectionArgs,
  ): Promise<Collection[]> {
    return this.collectionService.findMany(user.id, args);
  }

  @Query(() => Collection)
  async collection(
    @Args() args: FindFirstCollectionArgs,
    @CurrentUser() user: User,
  ): Promise<Collection> {
    return this.collectionService.findOne(args, user.id);
  }

  @Mutation(() => Collection)
  async addCollection(
    @CurrentUser() user: User,
    @Args('input') input: CollectionCreateWithoutUserInput,
  ): Promise<Collection> {
    return this.collectionService.create(input, user.id);
  }

  @ResolveField('cards', () => [CardsInCollection])
  async getCardsInCollection(
    @Parent() collection: Collection,
    @CurrentUser() user: User,
    @Args() args?: FindManyCardsInCollectionArgs,
  ): Promise<CardsInCollection[]> {
    return this.cardsInCollectionService.findManyOrderedByPrice(user.id, {
      ...args,
      where: { ...args.where, collectionId: { equals: collection.id } },
    });
  }

  @ResolveField('_count', () => CollectionCount)
  async getCount(@Parent() collection: Collection): Promise<CollectionCount> {
    return {
      cards: await this.cardsInCollectionService.count(collection.id),
    };
  }
}
