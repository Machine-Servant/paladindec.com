import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ScryfallDailyProcessLogScalarWhereWithAggregatesInput {
  @Field(() => [ScryfallDailyProcessLogScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ScryfallDailyProcessLogScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallDailyProcessLogScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ScryfallDailyProcessLogScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallDailyProcessLogScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ScryfallDailyProcessLogScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isCompleted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
