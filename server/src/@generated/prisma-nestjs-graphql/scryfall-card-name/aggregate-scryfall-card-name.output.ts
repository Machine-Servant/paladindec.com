import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallCardNameCountAggregate } from './scryfall-card-name-count-aggregate.output';
import { ScryfallCardNameMinAggregate } from './scryfall-card-name-min-aggregate.output';
import { ScryfallCardNameMaxAggregate } from './scryfall-card-name-max-aggregate.output';

@ObjectType()
export class AggregateScryfallCardName {

    @Field(() => ScryfallCardNameCountAggregate, {nullable:true})
    _count?: ScryfallCardNameCountAggregate;

    @Field(() => ScryfallCardNameMinAggregate, {nullable:true})
    _min?: ScryfallCardNameMinAggregate;

    @Field(() => ScryfallCardNameMaxAggregate, {nullable:true})
    _max?: ScryfallCardNameMaxAggregate;
}
