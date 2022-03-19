import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ScryfallPriceCountAggregate } from './scryfall-price-count-aggregate.output';
import { ScryfallPriceAvgAggregate } from './scryfall-price-avg-aggregate.output';
import { ScryfallPriceSumAggregate } from './scryfall-price-sum-aggregate.output';
import { ScryfallPriceMinAggregate } from './scryfall-price-min-aggregate.output';
import { ScryfallPriceMaxAggregate } from './scryfall-price-max-aggregate.output';

@ObjectType()
export class ScryfallPriceGroupBy {
  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => Float, { nullable: true })
  eur?: number;

  @Field(() => Float, { nullable: true })
  tix?: number;

  @Field(() => Float, { nullable: true })
  usd?: number;

  @Field(() => Float, { nullable: true })
  eurFoil?: number;

  @Field(() => Float, { nullable: true })
  usdFoil?: number;

  @Field(() => Float, { nullable: true })
  usdEtched?: number;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  currentPriceOfCardId?: string;

  @Field(() => ScryfallPriceCountAggregate, { nullable: true })
  _count?: ScryfallPriceCountAggregate;

  @Field(() => ScryfallPriceAvgAggregate, { nullable: true })
  _avg?: ScryfallPriceAvgAggregate;

  @Field(() => ScryfallPriceSumAggregate, { nullable: true })
  _sum?: ScryfallPriceSumAggregate;

  @Field(() => ScryfallPriceMinAggregate, { nullable: true })
  _min?: ScryfallPriceMinAggregate;

  @Field(() => ScryfallPriceMaxAggregate, { nullable: true })
  _max?: ScryfallPriceMaxAggregate;
}
