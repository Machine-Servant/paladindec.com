import {
  Args,
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { ScryfallCardFace } from '../../../@generated/prisma-nestjs-graphql/scryfall-card-face/scryfall-card-face.model';
import { FindManyScryfallCardArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/find-many-scryfall-card.args';
import { ScryfallCardCount } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card-count.output';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { FindManyScryfallPriceArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/find-many-scryfall-price.args';
import { ScryfallPriceGroupBy } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price-group-by.output';
import { ScryfallPrice } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price.model';
import { ScryfallRelatedCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-related-card/scryfall-related-card.model';
import { ScryfallSet } from '../../../@generated/prisma-nestjs-graphql/scryfall-set/scryfall-set.model';
import { ScryfallSetService } from '../../scryfall/services/scryfall-set.service';
import { ScryfallPriceGroupByWithoutByArgs } from '../args/scryfall-price-group-by-without-by.args';
import { ScryfallCardFaceService } from '../services/scryfall-card-face.service';
import { ScryfallCardService } from '../services/scryfall-card.service';
import { ScryfallPriceService } from '../services/scryfall-price.service';
import { ScryfallRelatedCardService } from '../services/scryfall-related-card.service';

@Resolver(() => ScryfallCard)
export class ScryfallCardResolver {
  constructor(
    private readonly scryfallCardService: ScryfallCardService,
    private readonly scryfallCardFaceService: ScryfallCardFaceService,
    private readonly scryfallRelatedCardService: ScryfallRelatedCardService,
    private readonly scryfallSetService: ScryfallSetService,
    private readonly scryfallPriceService: ScryfallPriceService,
  ) {}

  @Query(() => [ScryfallCard])
  async allScryfallCards(
    @Args() query?: FindManyScryfallCardArgs,
  ): Promise<ScryfallCard[]> {
    return this.scryfallCardService.findMany(query);
  }

  @ResolveField('cardFaces', () => [ScryfallCardFace])
  async getCardFaces(
    @Parent() card: ScryfallCard,
  ): Promise<ScryfallCardFace[]> {
    return this.scryfallCardFaceService.findMany({
      cardId: { equals: card.id },
    });
  }

  @ResolveField('relatedTo', () => [ScryfallRelatedCard])
  async getRelatedTo(
    @Parent() card: ScryfallCard,
  ): Promise<ScryfallRelatedCard[]> {
    return this.scryfallRelatedCardService.findMany({
      cardId: { equals: card.id },
    });
  }

  @ResolveField('referencedBy', () => [ScryfallRelatedCard])
  async getReferencedBy(
    @Parent() card: ScryfallCard,
  ): Promise<ScryfallRelatedCard[]> {
    return this.scryfallRelatedCardService.findMany({
      referenceId: { equals: card.id },
    });
  }

  @ResolveField('set', () => ScryfallSet)
  async getSet(@Parent() card: ScryfallCard): Promise<ScryfallSet> {
    return this.scryfallSetService.findOne(card.setId);
  }

  @ResolveField('_count', () => ScryfallCardCount)
  async getCount(@Parent() card: ScryfallCard): Promise<ScryfallCardCount> {
    return {
      cardFaces: await this.scryfallCardFaceService.count({
        cardId: { equals: card.id },
      }),
      referencedBy: await this.scryfallRelatedCardService.count({
        referenceId: { equals: card.id },
      }),
      relatedTo: await this.scryfallRelatedCardService.count({
        cardId: { equals: card.id },
      }),
    };
  }

  @ResolveField('scryfallPrice', () => [ScryfallPrice])
  async getScryfallPrices(
    @Parent() card: ScryfallCard,
    @Args() args?: FindManyScryfallPriceArgs,
  ): Promise<ScryfallPrice[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { distinct, ...findManyArgs } = args;
    return this.scryfallPriceService.findMany({
      ...findManyArgs,
      where: { ...args.where, cardId: { equals: card.id } },
    });
  }

  @ResolveProperty('scryfallPricesGroupBy', () => [ScryfallPriceGroupBy])
  async getScryfallPricesGroupBy(
    @Parent() card: ScryfallCard,
    @Args() args?: ScryfallPriceGroupByWithoutByArgs,
  ) {
    const results = await this.scryfallPriceService.groupBy({
      ...args,
      by: ['cardId'],
      where: { ...args.where, cardId: { equals: card.id } },
    });
    return results;
  }
}
