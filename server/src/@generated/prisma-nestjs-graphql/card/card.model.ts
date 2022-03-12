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

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  collectorNumber!: string | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isBorderless!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isShowcase!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isPaper!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isExtendedArt!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isRetro!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  canBeNonFoil!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  canBeFoil!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  canBeEtched!: boolean;

  @Field(() => ScryfallPrice, { nullable: true })
  currentPrice?: ScryfallPrice | null;

  @Field(() => [CardsInCollection], { nullable: true })
  collections?: Array<CardsInCollection>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => CardCount, { nullable: false })
  _count?: CardCount;
}
