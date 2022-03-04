import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ScryfallSet as PrismaScryfallSet } from 'prisma/prisma-client';
import { FindManyScryfallCardArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/find-many-scryfall-card.args';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { FindManyScryfallSetArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/find-many-scryfall-set.args';
import { ScryfallSetCount } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set-count.output';
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
    @Args({ nullable: true }) args?: FindManyScryfallSetArgs,
  ): Promise<ScryfallSet[]> {
    return this.scryfallSetService.findMany(args);
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
