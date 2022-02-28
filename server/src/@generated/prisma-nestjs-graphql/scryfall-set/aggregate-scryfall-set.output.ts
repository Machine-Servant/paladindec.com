import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallSetCountAggregate } from './scryfall-set-count-aggregate.output';
import { ScryfallSetAvgAggregate } from './scryfall-set-avg-aggregate.output';
import { ScryfallSetSumAggregate } from './scryfall-set-sum-aggregate.output';
import { ScryfallSetMinAggregate } from './scryfall-set-min-aggregate.output';
import { ScryfallSetMaxAggregate } from './scryfall-set-max-aggregate.output';

@ObjectType()
export class AggregateScryfallSet {
  @Field(() => ScryfallSetCountAggregate, { nullable: true })
  _count?: ScryfallSetCountAggregate;

  @Field(() => ScryfallSetAvgAggregate, { nullable: true })
  _avg?: ScryfallSetAvgAggregate;

  @Field(() => ScryfallSetSumAggregate, { nullable: true })
  _sum?: ScryfallSetSumAggregate;

  @Field(() => ScryfallSetMinAggregate, { nullable: true })
  _min?: ScryfallSetMinAggregate;

  @Field(() => ScryfallSetMaxAggregate, { nullable: true })
  _max?: ScryfallSetMaxAggregate;
}
