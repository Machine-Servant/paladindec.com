import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallRelatedCardCountAggregate } from './scryfall-related-card-count-aggregate.output';
import { ScryfallRelatedCardMinAggregate } from './scryfall-related-card-min-aggregate.output';
import { ScryfallRelatedCardMaxAggregate } from './scryfall-related-card-max-aggregate.output';

@ObjectType()
export class AggregateScryfallRelatedCard {
  @Field(() => ScryfallRelatedCardCountAggregate, { nullable: true })
  _count?: ScryfallRelatedCardCountAggregate;

  @Field(() => ScryfallRelatedCardMinAggregate, { nullable: true })
  _min?: ScryfallRelatedCardMinAggregate;

  @Field(() => ScryfallRelatedCardMaxAggregate, { nullable: true })
  _max?: ScryfallRelatedCardMaxAggregate;
}
