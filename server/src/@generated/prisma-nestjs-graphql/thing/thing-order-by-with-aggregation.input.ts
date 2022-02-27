import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThingCountOrderByAggregateInput } from './thing-count-order-by-aggregate.input';
import { ThingAvgOrderByAggregateInput } from './thing-avg-order-by-aggregate.input';
import { ThingMaxOrderByAggregateInput } from './thing-max-order-by-aggregate.input';
import { ThingMinOrderByAggregateInput } from './thing-min-order-by-aggregate.input';
import { ThingSumOrderByAggregateInput } from './thing-sum-order-by-aggregate.input';

@InputType()
export class ThingOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => ThingCountOrderByAggregateInput, { nullable: true })
  _count?: ThingCountOrderByAggregateInput;

  @Field(() => ThingAvgOrderByAggregateInput, { nullable: true })
  _avg?: ThingAvgOrderByAggregateInput;

  @Field(() => ThingMaxOrderByAggregateInput, { nullable: true })
  _max?: ThingMaxOrderByAggregateInput;

  @Field(() => ThingMinOrderByAggregateInput, { nullable: true })
  _min?: ThingMinOrderByAggregateInput;

  @Field(() => ThingSumOrderByAggregateInput, { nullable: true })
  _sum?: ThingSumOrderByAggregateInput;
}
