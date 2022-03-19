import { InjectQueue } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@prisma/client';
import { Queue } from 'bull';
import { Card } from '../../../@generated/prisma-nestjs-graphql/card/card.model';
import { FindManyCardArgs } from '../../../@generated/prisma-nestjs-graphql/card/find-many-card.args';
import { FindUniqueCardArgs } from '../../../@generated/prisma-nestjs-graphql/card/find-unique-card.args';
import { CardsInCollection } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection.model';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { ScryfallCard } from '../../../@generated/prisma-nestjs-graphql/scryfall-card/scryfall-card.model';
import { ScryfallPrice } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price.model';
import { CardsInCollectionService } from '../../collection/services/cards-in-collection.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ScryfallCardService } from '../../scryfall/services/scryfall-card.service';
import { ScryfallPriceService } from '../../scryfall/services/scryfall-price.service';
import { CardService } from '../services/card.service';

@Resolver(() => Card)
export class CardResolver {
  constructor(
    private readonly cardService: CardService,
    private readonly scryfallCardService: ScryfallCardService,
    private readonly scryfallPriceService: ScryfallPriceService,
    private readonly cardsInCollectionService: CardsInCollectionService,
    @InjectQueue('card') private readonly cardQueue: Queue,
  ) {}

  private readonly logger = new Logger(CardResolver.name);

  @Query(() => [Card])
  async allCards(@Args() args?: FindManyCardArgs): Promise<Card[]> {
    return this.cardService.findMany(args, {
      includeCurrentPrice: true,
      includeScryfallCard: true,
    });
  }

  @Query(() => Card)
  async card(@Args() args: FindUniqueCardArgs): Promise<Card> {
    return this.cardService.findUnique(args);
  }

  @Mutation(() => Boolean)
  async processUpdateCardList(): Promise<boolean> {
    try {
      await this.cardQueue.add('update-card-list');
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
    return true;
  }

  @ResolveField('collections', () => [CardsInCollection])
  async getCollections(
    @Parent() card: Card,
    @Args() args: FindManyCardsInCollectionArgs,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection[]> {
    return this.cardsInCollectionService.findMany(user.id, {
      ...args,
      where: {
        ...args.where,
        cardId: { equals: card.id },
      },
    });
  }

  @ResolveField('currentPrice', () => ScryfallPrice)
  async getCurrentPrice(@Parent() card: Card): Promise<ScryfallPrice> {
    if (!card.currentPrice) {
      return await this.scryfallPriceService.findUnique({
        where: { currentPriceOfCardId: card.id },
      });
    }
    return card.currentPrice;
  }

  @ResolveField('scryfallCard', () => ScryfallCard)
  async getScryfallCard(@Parent() card: Card): Promise<ScryfallCard> {
    if (!card.scryfallCard) {
      return this.scryfallCardService.findOne(card.scryfallCardId);
    }
    return card.scryfallCard;
  }
}
