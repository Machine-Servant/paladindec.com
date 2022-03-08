import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereInput } from './scryfall-card-name-where.input';
import { ScryfallCardNameOrderByWithAggregationInput } from './scryfall-card-name-order-by-with-aggregation.input';
import { ScryfallCardNameScalarFieldEnum } from './scryfall-card-name-scalar-field.enum';
import { ScryfallCardNameScalarWhereWithAggregatesInput } from './scryfall-card-name-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardNameCountAggregateInput } from './scryfall-card-name-count-aggregate.input';
import { ScryfallCardNameMinAggregateInput } from './scryfall-card-name-min-aggregate.input';
import { ScryfallCardNameMaxAggregateInput } from './scryfall-card-name-max-aggregate.input';

@ArgsType()
export class ScryfallCardNameGroupByArgs {

    @Field(() => ScryfallCardNameWhereInput, {nullable:true})
    where?: ScryfallCardNameWhereInput;

    @Field(() => [ScryfallCardNameOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScryfallCardNameOrderByWithAggregationInput>;

    @Field(() => [ScryfallCardNameScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScryfallCardNameScalarFieldEnum>;

    @Field(() => ScryfallCardNameScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScryfallCardNameScalarWhereWithAggregatesInput;

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
