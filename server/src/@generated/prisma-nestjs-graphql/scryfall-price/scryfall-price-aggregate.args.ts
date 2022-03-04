import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';
import { ScryfallPriceOrderByWithRelationInput } from './scryfall-price-order-by-with-relation.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallPriceCountAggregateInput } from './scryfall-price-count-aggregate.input';
import { ScryfallPriceAvgAggregateInput } from './scryfall-price-avg-aggregate.input';
import { ScryfallPriceSumAggregateInput } from './scryfall-price-sum-aggregate.input';
import { ScryfallPriceMinAggregateInput } from './scryfall-price-min-aggregate.input';
import { ScryfallPriceMaxAggregateInput } from './scryfall-price-max-aggregate.input';

@ArgsType()
export class ScryfallPriceAggregateArgs {

    @Field(() => ScryfallPriceWhereInput, {nullable:true})
    where?: ScryfallPriceWhereInput;

    @Field(() => [ScryfallPriceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallPriceOrderByWithRelationInput>;

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:true})
    cursor?: ScryfallPriceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ScryfallPriceCountAggregateInput, {nullable:true})
    _count?: ScryfallPriceCountAggregateInput;

    @Field(() => ScryfallPriceAvgAggregateInput, {nullable:true})
    _avg?: ScryfallPriceAvgAggregateInput;

    @Field(() => ScryfallPriceSumAggregateInput, {nullable:true})
    _sum?: ScryfallPriceSumAggregateInput;

    @Field(() => ScryfallPriceMinAggregateInput, {nullable:true})
    _min?: ScryfallPriceMinAggregateInput;

    @Field(() => ScryfallPriceMaxAggregateInput, {nullable:true})
    _max?: ScryfallPriceMaxAggregateInput;
}
