import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CardsInCollectionCountAggregate } from './cards-in-collection-count-aggregate.output';
import { CardsInCollectionAvgAggregate } from './cards-in-collection-avg-aggregate.output';
import { CardsInCollectionSumAggregate } from './cards-in-collection-sum-aggregate.output';
import { CardsInCollectionMinAggregate } from './cards-in-collection-min-aggregate.output';
import { CardsInCollectionMaxAggregate } from './cards-in-collection-max-aggregate.output';

@ObjectType()
export class AggregateCardsInCollection {

    @Field(() => CardsInCollectionCountAggregate, {nullable:true})
    _count?: CardsInCollectionCountAggregate;

    @Field(() => CardsInCollectionAvgAggregate, {nullable:true})
    _avg?: CardsInCollectionAvgAggregate;

    @Field(() => CardsInCollectionSumAggregate, {nullable:true})
    _sum?: CardsInCollectionSumAggregate;

    @Field(() => CardsInCollectionMinAggregate, {nullable:true})
    _min?: CardsInCollectionMinAggregate;

    @Field(() => CardsInCollectionMaxAggregate, {nullable:true})
    _max?: CardsInCollectionMaxAggregate;
}
