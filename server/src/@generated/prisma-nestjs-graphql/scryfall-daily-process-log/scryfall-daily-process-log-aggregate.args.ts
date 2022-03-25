import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereInput } from './scryfall-daily-process-log-where.input';
import { ScryfallDailyProcessLogOrderByWithRelationInput } from './scryfall-daily-process-log-order-by-with-relation.input';
import { ScryfallDailyProcessLogWhereUniqueInput } from './scryfall-daily-process-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCountAggregateInput } from './scryfall-daily-process-log-count-aggregate.input';
import { ScryfallDailyProcessLogMinAggregateInput } from './scryfall-daily-process-log-min-aggregate.input';
import { ScryfallDailyProcessLogMaxAggregateInput } from './scryfall-daily-process-log-max-aggregate.input';

@ArgsType()
export class ScryfallDailyProcessLogAggregateArgs {
  @Field(() => ScryfallDailyProcessLogWhereInput, { nullable: true })
  where?: ScryfallDailyProcessLogWhereInput;

  @Field(() => [ScryfallDailyProcessLogOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallDailyProcessLogOrderByWithRelationInput>;

  @Field(() => ScryfallDailyProcessLogWhereUniqueInput, { nullable: true })
  cursor?: ScryfallDailyProcessLogWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ScryfallDailyProcessLogCountAggregateInput, { nullable: true })
  _count?: ScryfallDailyProcessLogCountAggregateInput;

  @Field(() => ScryfallDailyProcessLogMinAggregateInput, { nullable: true })
  _min?: ScryfallDailyProcessLogMinAggregateInput;

  @Field(() => ScryfallDailyProcessLogMaxAggregateInput, { nullable: true })
  _max?: ScryfallDailyProcessLogMaxAggregateInput;
}
