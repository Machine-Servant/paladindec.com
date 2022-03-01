import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { FindManyScryfallPriceArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/find-many-scryfall-price.args';
import { ScryfallPrice } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price.model';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallPriceService } from '../services/scryfall-price.service';

@Resolver(() => ScryfallPrice)
export class ScryfallPriceResolver {
  constructor(
    private readonly scryfallPriceService: ScryfallPriceService,
    private readonly scryfallCardService: ScryfallCardService,
  ) {}

  @Query(() => [ScryfallPrice])
  async allScryfallPrices(
    @Args() query: FindManyScryfallPriceArgs,
  ): Promise<ScryfallPrice[]> {
    return this.scryfallPriceService.findMany(query);
  }

  @ResolveField('card', () => ScryfallCard)
  async getCard(@Parent() parent: ScryfallPrice): Promise<ScryfallCard> {
    return this.scryfallCardService.findOne(parent.cardId);
  }

  @ResolveField('test', () => Int)
  async getTest(): Promise<number> {
    return 1;
  }
}
