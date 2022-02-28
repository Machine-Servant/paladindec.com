import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';
import { ScryfallPriceOrderByWithAggregationInput } from './scryfall-price-order-by-with-aggregation.input';
import { ScryfallPriceScalarFieldEnum } from './scryfall-price-scalar-field.enum';
import { ScryfallPriceScalarWhereWithAggregatesInput } from './scryfall-price-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallPriceCountAggregateInput } from './scryfall-price-count-aggregate.input';
import { ScryfallPriceAvgAggregateInput } from './scryfall-price-avg-aggregate.input';
import { ScryfallPriceSumAggregateInput } from './scryfall-price-sum-aggregate.input';
import { ScryfallPriceMinAggregateInput } from './scryfall-price-min-aggregate.input';
import { ScryfallPriceMaxAggregateInput } from './scryfall-price-max-aggregate.input';

@ArgsType()
export class ScryfallPriceGroupByArgs {
  @Field(() => ScryfallPriceWhereInput, { nullable: true })
  where?: ScryfallPriceWhereInput;

  @Field(() => [ScryfallPriceOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ScryfallPriceOrderByWithAggregationInput>;

  @Field(() => [ScryfallPriceScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScryfallPriceScalarFieldEnum>;

  @Field(() => ScryfallPriceScalarWhereWithAggregatesInput, { nullable: true })
  having?: ScryfallPriceScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ScryfallPriceCountAggregateInput, { nullable: true })
  _count?: ScryfallPriceCountAggregateInput;

  @Field(() => ScryfallPriceAvgAggregateInput, { nullable: true })
  _avg?: ScryfallPriceAvgAggregateInput;

  @Field(() => ScryfallPriceSumAggregateInput, { nullable: true })
  _sum?: ScryfallPriceSumAggregateInput;

  @Field(() => ScryfallPriceMinAggregateInput, { nullable: true })
  _min?: ScryfallPriceMinAggregateInput;

  @Field(() => ScryfallPriceMaxAggregateInput, { nullable: true })
  _max?: ScryfallPriceMaxAggregateInput;
}
