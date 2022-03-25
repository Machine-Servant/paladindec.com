import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCountAggregate } from './scryfall-daily-process-log-count-aggregate.output';
import { ScryfallDailyProcessLogMinAggregate } from './scryfall-daily-process-log-min-aggregate.output';
import { ScryfallDailyProcessLogMaxAggregate } from './scryfall-daily-process-log-max-aggregate.output';

@ObjectType()
export class ScryfallDailyProcessLogGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Boolean, { nullable: false })
  isCompleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => ScryfallDailyProcessLogCountAggregate, { nullable: true })
  _count?: ScryfallDailyProcessLogCountAggregate;

  @Field(() => ScryfallDailyProcessLogMinAggregate, { nullable: true })
  _min?: ScryfallDailyProcessLogMinAggregate;

  @Field(() => ScryfallDailyProcessLogMaxAggregate, { nullable: true })
  _max?: ScryfallDailyProcessLogMaxAggregate;
}
