import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereUniqueInput } from './scryfall-daily-process-log-where-unique.input';
import { ScryfallDailyProcessLogCreateInput } from './scryfall-daily-process-log-create.input';
import { ScryfallDailyProcessLogUpdateInput } from './scryfall-daily-process-log-update.input';

@ArgsType()
export class UpsertOneScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogWhereUniqueInput, { nullable: false })
  where!: ScryfallDailyProcessLogWhereUniqueInput;

  @Field(() => ScryfallDailyProcessLogCreateInput, { nullable: false })
  create!: ScryfallDailyProcessLogCreateInput;

  @Field(() => ScryfallDailyProcessLogUpdateInput, { nullable: false })
  update!: ScryfallDailyProcessLogUpdateInput;
}
