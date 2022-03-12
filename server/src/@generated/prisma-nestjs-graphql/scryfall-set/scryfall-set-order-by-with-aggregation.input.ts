import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ScryfallSetCountOrderByAggregateInput } from './scryfall-set-count-order-by-aggregate.input';
import { ScryfallSetAvgOrderByAggregateInput } from './scryfall-set-avg-order-by-aggregate.input';
import { ScryfallSetMaxOrderByAggregateInput } from './scryfall-set-max-order-by-aggregate.input';
import { ScryfallSetMinOrderByAggregateInput } from './scryfall-set-min-order-by-aggregate.input';
import { ScryfallSetSumOrderByAggregateInput } from './scryfall-set-sum-order-by-aggregate.input';

@InputType()
export class ScryfallSetOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  mtgoCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  arenaCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tcgPlayerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setType?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  releasedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  blockCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  block?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  parentSetCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardCount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedSize?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isDigital?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isFoilOnly?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isNonFoilOnly?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  iconSvgUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  searchUri?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ScryfallSetCountOrderByAggregateInput, { nullable: true })
  _count?: ScryfallSetCountOrderByAggregateInput;

  @Field(() => ScryfallSetAvgOrderByAggregateInput, { nullable: true })
  _avg?: ScryfallSetAvgOrderByAggregateInput;

  @Field(() => ScryfallSetMaxOrderByAggregateInput, { nullable: true })
  _max?: ScryfallSetMaxOrderByAggregateInput;

  @Field(() => ScryfallSetMinOrderByAggregateInput, { nullable: true })
  _min?: ScryfallSetMinOrderByAggregateInput;

  @Field(() => ScryfallSetSumOrderByAggregateInput, { nullable: true })
  _sum?: ScryfallSetSumOrderByAggregateInput;
}
