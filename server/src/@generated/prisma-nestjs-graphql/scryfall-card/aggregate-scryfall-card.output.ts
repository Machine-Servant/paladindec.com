import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallCardCountAggregate } from './scryfall-card-count-aggregate.output';
import { ScryfallCardAvgAggregate } from './scryfall-card-avg-aggregate.output';
import { ScryfallCardSumAggregate } from './scryfall-card-sum-aggregate.output';
import { ScryfallCardMinAggregate } from './scryfall-card-min-aggregate.output';
import { ScryfallCardMaxAggregate } from './scryfall-card-max-aggregate.output';

@ObjectType()
export class AggregateScryfallCard {

    @Field(() => ScryfallCardCountAggregate, {nullable:true})
    _count?: ScryfallCardCountAggregate;

    @Field(() => ScryfallCardAvgAggregate, {nullable:true})
    _avg?: ScryfallCardAvgAggregate;

    @Field(() => ScryfallCardSumAggregate, {nullable:true})
    _sum?: ScryfallCardSumAggregate;

    @Field(() => ScryfallCardMinAggregate, {nullable:true})
    _min?: ScryfallCardMinAggregate;

    @Field(() => ScryfallCardMaxAggregate, {nullable:true})
    _max?: ScryfallCardMaxAggregate;
}
