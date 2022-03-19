import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '@prisma/client';
import { Card } from '../../../@generated/prisma-nestjs-graphql/card/card.model';
import { CardsInCollectionUncheckedUpdateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-unchecked-update.input';
import { CardsInCollection } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection.model';
import { DeleteOneCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/delete-one-cards-in-collection.args';
import { FindFirstCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-first-cards-in-collection.args';
import { FindManyCardsInCollectionArgs } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/find-many-cards-in-collection.args';
import { CardService } from '../../card/services/card.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ScryfallPriceService } from '../../scryfall/services/scryfall-price.service';
import { AddCardToCollectionInput } from '../inputs/add-card-to-collection.input';
import { CardsInCollectionCardPrice } from '../object-types/cards-in-collection-card-price.object-type';
import { CardsInCollectionService } from '../services/cards-in-collection.service';

@Resolver(() => CardsInCollection)
export class CardsInCollectionResolver {
  constructor(
    private readonly cardsInCollectionService: CardsInCollectionService,
    private readonly cardService: CardService,
    private readonly scryfallPriceService: ScryfallPriceService,
  ) {}

  @Query(() => [CardsInCollection])
  async allCardsInCollection(
    @Args() args: FindManyCardsInCollectionArgs,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection[]> {
    return this.cardsInCollectionService.findMany(user.id, args);
  }

  @Query(() => CardsInCollection)
  async cardsInCollection(
    @Args() args: FindFirstCardsInCollectionArgs,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection> {
    return this.cardsInCollectionService.findOne(args, user.id);
  }

  @Mutation(() => CardsInCollection)
  async updateCardsInCollection(
    @Args('input') input?: CardsInCollectionUncheckedUpdateInput,
  ): Promise<CardsInCollection> {
    return this.cardsInCollectionService.update(input);
  }

  @Mutation(() => CardsInCollection)
  async addCardToCollection(
    @Args('input') input: AddCardToCollectionInput,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection> {
    return this.cardsInCollectionService.addCardToCollection(input, user.id);
  }

  @Mutation(() => CardsInCollection)
  async deleteCardFromCollection(
    @Args() args: DeleteOneCardsInCollectionArgs,
    @CurrentUser() user: User,
  ): Promise<CardsInCollection> {
    return this.cardsInCollectionService.delete(args, user.id);
  }

  @ResolveField('card', () => Card)
  async getCard(@Parent() cardsInCollection: CardsInCollection): Promise<Card> {
    return this.cardService.findUnique({
      where: { id: cardsInCollection.cardId },
    });
  }

  @ResolveField('price', () => CardsInCollectionCardPrice, { nullable: true })
  async getPrice(
    @Parent() cardsInCollection: CardsInCollection,
  ): Promise<CardsInCollectionCardPrice> {
    const currentPrice = await this.scryfallPriceService.findUnique({
      where: { currentPriceOfCardId: cardsInCollection.cardId },
    });

    if (!currentPrice) return null;

    const usd = cardsInCollection.isEtched
      ? currentPrice.usdEtched
      : cardsInCollection.isFoil
      ? currentPrice.usdFoil
      : currentPrice.usd;
    const eur =
      cardsInCollection.isEtched || cardsInCollection.isFoil
        ? currentPrice.eurFoil
        : currentPrice.eur;

    return {
      usd,
      eur,
    };
  }
}
