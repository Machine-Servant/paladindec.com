import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CardCountAggregate } from './card-count-aggregate.output';
import { CardMinAggregate } from './card-min-aggregate.output';
import { CardMaxAggregate } from './card-max-aggregate.output';

@ObjectType()
export class AggregateCard {
  @Field(() => CardCountAggregate, { nullable: true })
  _count?: CardCountAggregate;

  @Field(() => CardMinAggregate, { nullable: true })
  _min?: CardMinAggregate;

  @Field(() => CardMaxAggregate, { nullable: true })
  _max?: CardMaxAggregate;
}
