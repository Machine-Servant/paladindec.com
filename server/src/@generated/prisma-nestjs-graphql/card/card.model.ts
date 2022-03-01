import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ScryfallCard } from '../scryfall-card/scryfall-card.model';
import { ScryfallPrice } from '../scryfall-price/scryfall-price.model';
import { CardsInCollection } from '../cards-in-collection/cards-in-collection.model';
import { CardCount } from './card-count.output';

@ObjectType()
export class Card {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => ScryfallCard, { nullable: false })
  scryfallCard?: ScryfallCard;

  @Field(() => String, { nullable: false })
  scryfallCardId!: string;

  @Field(() => ScryfallPrice, { nullable: true })
  currentPrice?: ScryfallPrice | null;

  @Field(() => [CardsInCollection], { nullable: true })
  collections?: Array<CardsInCollection>;

  @Field(() => CardCount, { nullable: false })
  _count?: CardCount;
}
