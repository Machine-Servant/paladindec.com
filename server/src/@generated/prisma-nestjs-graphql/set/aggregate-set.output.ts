import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SetCountAggregate } from './set-count-aggregate.output';
import { SetAvgAggregate } from './set-avg-aggregate.output';
import { SetSumAggregate } from './set-sum-aggregate.output';
import { SetMinAggregate } from './set-min-aggregate.output';
import { SetMaxAggregate } from './set-max-aggregate.output';

@ObjectType()
export class AggregateSet {
  @Field(() => SetCountAggregate, { nullable: true })
  _count?: SetCountAggregate;

  @Field(() => SetAvgAggregate, { nullable: true })
  _avg?: SetAvgAggregate;

  @Field(() => SetSumAggregate, { nullable: true })
  _sum?: SetSumAggregate;

  @Field(() => SetMinAggregate, { nullable: true })
  _min?: SetMinAggregate;

  @Field(() => SetMaxAggregate, { nullable: true })
  _max?: SetMaxAggregate;
}
