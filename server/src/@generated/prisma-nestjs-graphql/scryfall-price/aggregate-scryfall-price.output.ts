import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallPriceCountAggregate } from './scryfall-price-count-aggregate.output';
import { ScryfallPriceAvgAggregate } from './scryfall-price-avg-aggregate.output';
import { ScryfallPriceSumAggregate } from './scryfall-price-sum-aggregate.output';
import { ScryfallPriceMinAggregate } from './scryfall-price-min-aggregate.output';
import { ScryfallPriceMaxAggregate } from './scryfall-price-max-aggregate.output';

@ObjectType()
export class AggregateScryfallPrice {

    @Field(() => ScryfallPriceCountAggregate, {nullable:true})
    _count?: ScryfallPriceCountAggregate;

    @Field(() => ScryfallPriceAvgAggregate, {nullable:true})
    _avg?: ScryfallPriceAvgAggregate;

    @Field(() => ScryfallPriceSumAggregate, {nullable:true})
    _sum?: ScryfallPriceSumAggregate;

    @Field(() => ScryfallPriceMinAggregate, {nullable:true})
    _min?: ScryfallPriceMinAggregate;

    @Field(() => ScryfallPriceMaxAggregate, {nullable:true})
    _max?: ScryfallPriceMaxAggregate;
}
