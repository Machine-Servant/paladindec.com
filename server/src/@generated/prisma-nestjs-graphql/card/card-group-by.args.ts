import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardWhereInput } from './card-where.input';
import { CardOrderByWithAggregationInput } from './card-order-by-with-aggregation.input';
import { CardScalarFieldEnum } from './card-scalar-field.enum';
import { CardScalarWhereWithAggregatesInput } from './card-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CardCountAggregateInput } from './card-count-aggregate.input';
import { CardMinAggregateInput } from './card-min-aggregate.input';
import { CardMaxAggregateInput } from './card-max-aggregate.input';

@ArgsType()
export class CardGroupByArgs {

    @Field(() => CardWhereInput, {nullable:true})
    where?: CardWhereInput;

    @Field(() => [CardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CardOrderByWithAggregationInput>;

    @Field(() => [CardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CardScalarFieldEnum>;

    @Field(() => CardScalarWhereWithAggregatesInput, {nullable:true})
    having?: CardScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CardCountAggregateInput, {nullable:true})
    _count?: CardCountAggregateInput;

    @Field(() => CardMinAggregateInput, {nullable:true})
    _min?: CardMinAggregateInput;

    @Field(() => CardMaxAggregateInput, {nullable:true})
    _max?: CardMaxAggregateInput;
}
