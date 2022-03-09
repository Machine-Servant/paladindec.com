import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallRelatedCardCountOrderByAggregateInput } from './scryfall-related-card-count-order-by-aggregate.input';
import { ScryfallRelatedCardMaxOrderByAggregateInput } from './scryfall-related-card-max-order-by-aggregate.input';
import { ScryfallRelatedCardMinOrderByAggregateInput } from './scryfall-related-card-min-order-by-aggregate.input';

@InputType()
export class ScryfallRelatedCardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    component?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeLine?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uri?: keyof typeof SortOrder;

    @Field(() => ScryfallRelatedCardCountOrderByAggregateInput, {nullable:true})
    _count?: ScryfallRelatedCardCountOrderByAggregateInput;

    @Field(() => ScryfallRelatedCardMaxOrderByAggregateInput, {nullable:true})
    _max?: ScryfallRelatedCardMaxOrderByAggregateInput;

    @Field(() => ScryfallRelatedCardMinOrderByAggregateInput, {nullable:true})
    _min?: ScryfallRelatedCardMinOrderByAggregateInput;
}
