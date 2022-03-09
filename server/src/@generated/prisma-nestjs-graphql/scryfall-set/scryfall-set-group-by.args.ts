import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereInput } from './scryfall-set-where.input';
import { ScryfallSetOrderByWithAggregationInput } from './scryfall-set-order-by-with-aggregation.input';
import { ScryfallSetScalarFieldEnum } from './scryfall-set-scalar-field.enum';
import { ScryfallSetScalarWhereWithAggregatesInput } from './scryfall-set-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallSetCountAggregateInput } from './scryfall-set-count-aggregate.input';
import { ScryfallSetAvgAggregateInput } from './scryfall-set-avg-aggregate.input';
import { ScryfallSetSumAggregateInput } from './scryfall-set-sum-aggregate.input';
import { ScryfallSetMinAggregateInput } from './scryfall-set-min-aggregate.input';
import { ScryfallSetMaxAggregateInput } from './scryfall-set-max-aggregate.input';

@ArgsType()
export class ScryfallSetGroupByArgs {

    @Field(() => ScryfallSetWhereInput, {nullable:true})
    where?: ScryfallSetWhereInput;

    @Field(() => [ScryfallSetOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScryfallSetOrderByWithAggregationInput>;

    @Field(() => [ScryfallSetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScryfallSetScalarFieldEnum>;

    @Field(() => ScryfallSetScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScryfallSetScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScryfallSetCountAggregateInput, {nullable:true})
    _count?: ScryfallSetCountAggregateInput;

    @Field(() => ScryfallSetAvgAggregateInput, {nullable:true})
    _avg?: ScryfallSetAvgAggregateInput;

    @Field(() => ScryfallSetSumAggregateInput, {nullable:true})
    _sum?: ScryfallSetSumAggregateInput;

    @Field(() => ScryfallSetMinAggregateInput, {nullable:true})
    _min?: ScryfallSetMinAggregateInput;

    @Field(() => ScryfallSetMaxAggregateInput, {nullable:true})
    _max?: ScryfallSetMaxAggregateInput;
}
