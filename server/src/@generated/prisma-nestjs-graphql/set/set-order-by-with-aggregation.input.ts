import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SetCountOrderByAggregateInput } from './set-count-order-by-aggregate.input';
import { SetAvgOrderByAggregateInput } from './set-avg-order-by-aggregate.input';
import { SetMaxOrderByAggregateInput } from './set-max-order-by-aggregate.input';
import { SetMinOrderByAggregateInput } from './set-min-order-by-aggregate.input';
import { SetSumOrderByAggregateInput } from './set-sum-order-by-aggregate.input';

@InputType()
export class SetOrderByWithAggregationInput {
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

  @Field(() => SetCountOrderByAggregateInput, { nullable: true })
  _count?: SetCountOrderByAggregateInput;

  @Field(() => SetAvgOrderByAggregateInput, { nullable: true })
  _avg?: SetAvgOrderByAggregateInput;

  @Field(() => SetMaxOrderByAggregateInput, { nullable: true })
  _max?: SetMaxOrderByAggregateInput;

  @Field(() => SetMinOrderByAggregateInput, { nullable: true })
  _min?: SetMinOrderByAggregateInput;

  @Field(() => SetSumOrderByAggregateInput, { nullable: true })
  _sum?: SetSumOrderByAggregateInput;
}
