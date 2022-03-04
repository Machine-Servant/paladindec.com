import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';
import { ScryfallRelatedCardOrderByWithRelationInput } from './scryfall-related-card-order-by-with-relation.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallRelatedCardCountAggregateInput } from './scryfall-related-card-count-aggregate.input';
import { ScryfallRelatedCardMinAggregateInput } from './scryfall-related-card-min-aggregate.input';
import { ScryfallRelatedCardMaxAggregateInput } from './scryfall-related-card-max-aggregate.input';

@ArgsType()
export class ScryfallRelatedCardAggregateArgs {

    @Field(() => ScryfallRelatedCardWhereInput, {nullable:true})
    where?: ScryfallRelatedCardWhereInput;

    @Field(() => [ScryfallRelatedCardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallRelatedCardOrderByWithRelationInput>;

    @Field(() => ScryfallRelatedCardWhereUniqueInput, {nullable:true})
    cursor?: ScryfallRelatedCardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScryfallRelatedCardCountAggregateInput, {nullable:true})
    _count?: ScryfallRelatedCardCountAggregateInput;

    @Field(() => ScryfallRelatedCardMinAggregateInput, {nullable:true})
    _min?: ScryfallRelatedCardMinAggregateInput;

    @Field(() => ScryfallRelatedCardMaxAggregateInput, {nullable:true})
    _max?: ScryfallRelatedCardMaxAggregateInput;
}
