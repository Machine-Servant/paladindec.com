import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ScryfallCard } from '../scryfall-card/scryfall-card.model';
import { Card } from '../card/card.model';

@ObjectType()
export class ScryfallPrice {
  @Field(() => Date, { nullable: false })
  date!: Date;

  @Field(() => Float, { nullable: true })
  eur!: number | null;

  @Field(() => Float, { nullable: true })
  tix!: number | null;

  @Field(() => Float, { nullable: true })
  usd!: number | null;

  @Field(() => Float, { nullable: true })
  eurFoil!: number | null;

  @Field(() => Float, { nullable: true })
  usdFoil!: number | null;

  @Field(() => Float, { nullable: true })
  usdEtched!: number | null;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  currentPriceOfCardId!: string | null;

  @Field(() => ScryfallCard, { nullable: false })
  card?: ScryfallCard;

  @Field(() => Card, { nullable: true })
  currentPriceOfCard?: Card | null;
}
