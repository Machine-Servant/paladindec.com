import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereInput } from './scryfall-card-name-where.input';
import { ScryfallCardNameOrderByWithRelationInput } from './scryfall-card-name-order-by-with-relation.input';
import { ScryfallCardNameWhereUniqueInput } from './scryfall-card-name-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardNameCountAggregateInput } from './scryfall-card-name-count-aggregate.input';
import { ScryfallCardNameMinAggregateInput } from './scryfall-card-name-min-aggregate.input';
import { ScryfallCardNameMaxAggregateInput } from './scryfall-card-name-max-aggregate.input';

@ArgsType()
export class ScryfallCardNameAggregateArgs {

    @Field(() => ScryfallCardNameWhereInput, {nullable:true})
    where?: ScryfallCardNameWhereInput;

    @Field(() => [ScryfallCardNameOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallCardNameOrderByWithRelationInput>;

    @Field(() => ScryfallCardNameWhereUniqueInput, {nullable:true})
    cursor?: ScryfallCardNameWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScryfallCardNameCountAggregateInput, {nullable:true})
    _count?: ScryfallCardNameCountAggregateInput;

    @Field(() => ScryfallCardNameMinAggregateInput, {nullable:true})
    _min?: ScryfallCardNameMinAggregateInput;

    @Field(() => ScryfallCardNameMaxAggregateInput, {nullable:true})
    _max?: ScryfallCardNameMaxAggregateInput;
}
