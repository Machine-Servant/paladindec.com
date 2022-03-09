import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';
import { ScryfallCardOrderByWithAggregationInput } from './scryfall-card-order-by-with-aggregation.input';
import { ScryfallCardScalarFieldEnum } from './scryfall-card-scalar-field.enum';
import { ScryfallCardScalarWhereWithAggregatesInput } from './scryfall-card-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardCountAggregateInput } from './scryfall-card-count-aggregate.input';
import { ScryfallCardAvgAggregateInput } from './scryfall-card-avg-aggregate.input';
import { ScryfallCardSumAggregateInput } from './scryfall-card-sum-aggregate.input';
import { ScryfallCardMinAggregateInput } from './scryfall-card-min-aggregate.input';
import { ScryfallCardMaxAggregateInput } from './scryfall-card-max-aggregate.input';

@ArgsType()
export class ScryfallCardGroupByArgs {

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    where?: ScryfallCardWhereInput;

    @Field(() => [ScryfallCardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ScryfallCardOrderByWithAggregationInput>;

    @Field(() => [ScryfallCardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ScryfallCardScalarFieldEnum>;

    @Field(() => ScryfallCardScalarWhereWithAggregatesInput, {nullable:true})
    having?: ScryfallCardScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScryfallCardCountAggregateInput, {nullable:true})
    _count?: ScryfallCardCountAggregateInput;

    @Field(() => ScryfallCardAvgAggregateInput, {nullable:true})
    _avg?: ScryfallCardAvgAggregateInput;

    @Field(() => ScryfallCardSumAggregateInput, {nullable:true})
    _sum?: ScryfallCardSumAggregateInput;

    @Field(() => ScryfallCardMinAggregateInput, {nullable:true})
    _min?: ScryfallCardMinAggregateInput;

    @Field(() => ScryfallCardMaxAggregateInput, {nullable:true})
    _max?: ScryfallCardMaxAggregateInput;
}
