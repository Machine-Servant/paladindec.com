import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RelatedCardCountOrderByAggregateInput } from './related-card-count-order-by-aggregate.input';
import { RelatedCardMaxOrderByAggregateInput } from './related-card-max-order-by-aggregate.input';
import { RelatedCardMinOrderByAggregateInput } from './related-card-min-order-by-aggregate.input';

@InputType()
export class RelatedCardOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  referenceId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  component?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  typeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uri?: keyof typeof SortOrder;

  @Field(() => RelatedCardCountOrderByAggregateInput, { nullable: true })
  _count?: RelatedCardCountOrderByAggregateInput;

  @Field(() => RelatedCardMaxOrderByAggregateInput, { nullable: true })
  _max?: RelatedCardMaxOrderByAggregateInput;

  @Field(() => RelatedCardMinOrderByAggregateInput, { nullable: true })
  _min?: RelatedCardMinOrderByAggregateInput;
}
