import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CollectionCountAggregate } from './collection-count-aggregate.output';
import { CollectionMinAggregate } from './collection-min-aggregate.output';
import { CollectionMaxAggregate } from './collection-max-aggregate.output';

@ObjectType()
export class AggregateCollection {

    @Field(() => CollectionCountAggregate, {nullable:true})
    _count?: CollectionCountAggregate;

    @Field(() => CollectionMinAggregate, {nullable:true})
    _min?: CollectionMinAggregate;

    @Field(() => CollectionMaxAggregate, {nullable:true})
    _max?: CollectionMaxAggregate;
}
