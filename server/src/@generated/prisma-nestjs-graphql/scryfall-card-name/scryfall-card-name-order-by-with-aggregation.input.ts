import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardNameCountOrderByAggregateInput } from './scryfall-card-name-count-order-by-aggregate.input';
import { ScryfallCardNameMaxOrderByAggregateInput } from './scryfall-card-name-max-order-by-aggregate.input';
import { ScryfallCardNameMinOrderByAggregateInput } from './scryfall-card-name-min-order-by-aggregate.input';

@InputType()
export class ScryfallCardNameOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ScryfallCardNameCountOrderByAggregateInput, { nullable: true })
  _count?: ScryfallCardNameCountOrderByAggregateInput;

  @Field(() => ScryfallCardNameMaxOrderByAggregateInput, { nullable: true })
  _max?: ScryfallCardNameMaxOrderByAggregateInput;

  @Field(() => ScryfallCardNameMinOrderByAggregateInput, { nullable: true })
  _min?: ScryfallCardNameMinOrderByAggregateInput;
}
