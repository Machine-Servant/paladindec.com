import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ScryfallPriceCountOrderByAggregateInput } from './scryfall-price-count-order-by-aggregate.input';
import { ScryfallPriceAvgOrderByAggregateInput } from './scryfall-price-avg-order-by-aggregate.input';
import { ScryfallPriceMaxOrderByAggregateInput } from './scryfall-price-max-order-by-aggregate.input';
import { ScryfallPriceMinOrderByAggregateInput } from './scryfall-price-min-order-by-aggregate.input';
import { ScryfallPriceSumOrderByAggregateInput } from './scryfall-price-sum-order-by-aggregate.input';

@InputType()
export class ScryfallPriceOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  eur?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tix?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  eurFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usdFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usdEtched?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  currentPriceOfCardId?: keyof typeof SortOrder;

  @Field(() => ScryfallPriceCountOrderByAggregateInput, { nullable: true })
  _count?: ScryfallPriceCountOrderByAggregateInput;

  @Field(() => ScryfallPriceAvgOrderByAggregateInput, { nullable: true })
  _avg?: ScryfallPriceAvgOrderByAggregateInput;

  @Field(() => ScryfallPriceMaxOrderByAggregateInput, { nullable: true })
  _max?: ScryfallPriceMaxOrderByAggregateInput;

  @Field(() => ScryfallPriceMinOrderByAggregateInput, { nullable: true })
  _min?: ScryfallPriceMinOrderByAggregateInput;

  @Field(() => ScryfallPriceSumOrderByAggregateInput, { nullable: true })
  _sum?: ScryfallPriceSumOrderByAggregateInput;
}
