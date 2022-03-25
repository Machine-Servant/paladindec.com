import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallDailyProcessLogCountOrderByAggregateInput } from './scryfall-daily-process-log-count-order-by-aggregate.input';
import { ScryfallDailyProcessLogMaxOrderByAggregateInput } from './scryfall-daily-process-log-max-order-by-aggregate.input';
import { ScryfallDailyProcessLogMinOrderByAggregateInput } from './scryfall-daily-process-log-min-order-by-aggregate.input';

@InputType()
export class ScryfallDailyProcessLogOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isCompleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ScryfallDailyProcessLogCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ScryfallDailyProcessLogCountOrderByAggregateInput;

  @Field(() => ScryfallDailyProcessLogMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ScryfallDailyProcessLogMaxOrderByAggregateInput;

  @Field(() => ScryfallDailyProcessLogMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ScryfallDailyProcessLogMinOrderByAggregateInput;
}
