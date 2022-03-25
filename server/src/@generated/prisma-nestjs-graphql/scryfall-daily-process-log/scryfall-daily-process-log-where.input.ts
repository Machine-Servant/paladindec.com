import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ScryfallDailyProcessLogWhereInput {
  @Field(() => [ScryfallDailyProcessLogWhereInput], { nullable: true })
  AND?: Array<ScryfallDailyProcessLogWhereInput>;

  @Field(() => [ScryfallDailyProcessLogWhereInput], { nullable: true })
  OR?: Array<ScryfallDailyProcessLogWhereInput>;

  @Field(() => [ScryfallDailyProcessLogWhereInput], { nullable: true })
  NOT?: Array<ScryfallDailyProcessLogWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isCompleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
