import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Set as PrismaSet } from 'prisma/prisma-client';
import { CardOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/card/card-order-by-with-aggregation.input';
import { CardWhereInput } from '../../../@generated/prisma-nestjs-graphql/card/card-where.input';
import { Card } from '../../../@generated/prisma-nestjs-graphql/card/card.model';
import { SetCount } from '../../../@generated/prisma-nestjs-graphql/set/set-count.output';
import { SetOrderByWithAggregationInput } from '../../../@generated/prisma-nestjs-graphql/set/set-order-by-with-aggregation.input';
import { SetWhereInput } from '../../../@generated/prisma-nestjs-graphql/set/set-where.input';
import { Set as SetObject } from '../../../@generated/prisma-nestjs-graphql/set/set.model';
import { CardService } from '../../card/services/card.service';
import { SetService } from '../services/set.service';

@Resolver(() => SetObject)
export class SetResolver {
  constructor(
    private readonly setService: SetService,
    private readonly cardService: CardService,
  ) {}

  @Query(() => [SetObject])
  async allSets(
    @Args('where', { nullable: true }) where?: SetWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy?: SetOrderByWithAggregationInput,
  ): Promise<SetObject[]> {
    return this.setService.findMany(where, orderBy);
  }

  @ResolveField('cards', () => [Card])
  async getCards(
    @Parent() set: PrismaSet,
    @Args('where', { nullable: true }) where?: CardWhereInput,
    @Args('orderBy', { nullable: true })
    orderBy?: CardOrderByWithAggregationInput,
  ): Promise<Card[]> {
    return this.cardService.findMany(
      { ...where, setId: { equals: set.id } },
      undefined,
      orderBy,
    );
  }

  @ResolveField('_count', () => SetCount)
  async getCount(@Parent() set: PrismaSet): Promise<SetCount> {
    return {
      cards: await this.cardService.count({ setId: { equals: set.id } }),
    };
  }
}
