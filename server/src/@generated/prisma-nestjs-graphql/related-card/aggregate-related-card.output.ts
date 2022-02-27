import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RelatedCardCountAggregate } from './related-card-count-aggregate.output';
import { RelatedCardMinAggregate } from './related-card-min-aggregate.output';
import { RelatedCardMaxAggregate } from './related-card-max-aggregate.output';

@ObjectType()
export class AggregateRelatedCard {
  @Field(() => RelatedCardCountAggregate, { nullable: true })
  _count?: RelatedCardCountAggregate;

  @Field(() => RelatedCardMinAggregate, { nullable: true })
  _min?: RelatedCardMinAggregate;

  @Field(() => RelatedCardMaxAggregate, { nullable: true })
  _max?: RelatedCardMaxAggregate;
}
