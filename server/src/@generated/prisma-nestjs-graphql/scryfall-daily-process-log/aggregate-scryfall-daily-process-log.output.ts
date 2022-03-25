import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCountAggregate } from './scryfall-daily-process-log-count-aggregate.output';
import { ScryfallDailyProcessLogMinAggregate } from './scryfall-daily-process-log-min-aggregate.output';
import { ScryfallDailyProcessLogMaxAggregate } from './scryfall-daily-process-log-max-aggregate.output';

@ObjectType()
export class AggregateScryfallDailyProcessLog {
  @Field(() => ScryfallDailyProcessLogCountAggregate, { nullable: true })
  _count?: ScryfallDailyProcessLogCountAggregate;

  @Field(() => ScryfallDailyProcessLogMinAggregate, { nullable: true })
  _min?: ScryfallDailyProcessLogMinAggregate;

  @Field(() => ScryfallDailyProcessLogMaxAggregate, { nullable: true })
  _max?: ScryfallDailyProcessLogMaxAggregate;
}
