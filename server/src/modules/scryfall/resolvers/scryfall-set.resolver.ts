import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ScryfallSet as PrismaScryfallSet } from 'prisma/prisma-client';
import { FindManyScryfallCardArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/find-many-scryfall-card.args';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { ScryfallSetCount } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-count.output';
import { ScryfallSetOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-order-by-with-aggregation.input';
import { ScryfallSetWhereInput } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-where.input';
import { ScryfallSet } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set.model';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallSetService } from '../services/scryfall-set.service';

@Resolver(() => ScryfallSet)
export class ScryfallSetResolver {
  constructor(
    private readonly scryfallSetService: ScryfallSetService,
    private readonly scryfallCardService: ScryfallCardService,
  ) {}

  @Query(() => [ScryfallSet])
  async allScryfallSets(
    @Args('where', { nullable: true }) where?: ScryfallSetWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy?: ScryfallSetOrderByWithAggregationInput,
  ): Promise<ScryfallSet[]> {
    return this.scryfallSetService.findMany(where, orderBy);
  }

  @ResolveField('cards', () => [ScryfallCard])
  async getCards(
    @Parent() set: PrismaScryfallSet,
    @Args() args?: FindManyScryfallCardArgs,
  ): Promise<ScryfallCard[]> {
    return this.scryfallCardService.findMany({
      ...args,
      where: { ...args.where, setId: { equals: set.id } },
    });
  }

  @ResolveField('_count', () => ScryfallSetCount)
  async getCount(@Parent() set: PrismaScryfallSet): Promise<ScryfallSetCount> {
    return {
      cards: await this.scryfallCardService.count({
        setId: { equals: set.id },
      }),
    };
  }
}
