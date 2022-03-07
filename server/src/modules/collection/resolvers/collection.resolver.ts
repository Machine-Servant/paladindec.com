import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CardsInCollection } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection.model';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { Collection } from '../../../@generated/prisma-nestjs-graphql/collection/collection.model';
import { FindManyCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/collection/find-many-collection.args';
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
    @Args() args?: FindManyCollectionArgs,
  ): Promise<Collection[]> {
    return this.collectionService.findMany(args);
  }

  @ResolveField('cards', () => [CardsInCollection])
  async getCardsInCollection(
    @Parent() collection: Collection,
    @Args() args?: FindManyCardsInCollectionArgs,
  ): Promise<CardsInCollection[]> {
    return this.cardsInCollectionService.findMany({
      ...args,
      where: { ...args.where, collectionId: { equals: collection.id } },
    });
  }
}
