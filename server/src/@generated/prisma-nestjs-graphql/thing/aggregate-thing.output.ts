import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ThingCountAggregate } from './thing-count-aggregate.output';
import { ThingAvgAggregate } from './thing-avg-aggregate.output';
import { ThingSumAggregate } from './thing-sum-aggregate.output';
import { ThingMinAggregate } from './thing-min-aggregate.output';
import { ThingMaxAggregate } from './thing-max-aggregate.output';

@ObjectType()
export class AggregateThing {
  @Field(() => ThingCountAggregate, { nullable: true })
  _count?: ThingCountAggregate;

  @Field(() => ThingAvgAggregate, { nullable: true })
  _avg?: ThingAvgAggregate;

  @Field(() => ThingSumAggregate, { nullable: true })
  _sum?: ThingSumAggregate;

  @Field(() => ThingMinAggregate, { nullable: true })
  _min?: ThingMinAggregate;

  @Field(() => ThingMaxAggregate, { nullable: true })
  _max?: ThingMaxAggregate;
}
