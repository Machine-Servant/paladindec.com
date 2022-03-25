import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereInput } from './scryfall-daily-process-log-where.input';
import { ScryfallDailyProcessLogOrderByWithAggregationInput } from './scryfall-daily-process-log-order-by-with-aggregation.input';
import { ScryfallDailyProcessLogScalarFieldEnum } from './scryfall-daily-process-log-scalar-field.enum';
import { ScryfallDailyProcessLogScalarWhereWithAggregatesInput } from './scryfall-daily-process-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCountAggregateInput } from './scryfall-daily-process-log-count-aggregate.input';
import { ScryfallDailyProcessLogMinAggregateInput } from './scryfall-daily-process-log-min-aggregate.input';
import { ScryfallDailyProcessLogMaxAggregateInput } from './scryfall-daily-process-log-max-aggregate.input';

@ArgsType()
export class ScryfallDailyProcessLogGroupByArgs {
  @Field(() => ScryfallDailyProcessLogWhereInput, { nullable: true })
  where?: ScryfallDailyProcessLogWhereInput;

  @Field(() => [ScryfallDailyProcessLogOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallDailyProcessLogOrderByWithAggregationInput>;

  @Field(() => [ScryfallDailyProcessLogScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScryfallDailyProcessLogScalarFieldEnum>;

  @Field(() => ScryfallDailyProcessLogScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ScryfallDailyProcessLogScalarWhereWithAggregatesInput;

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
