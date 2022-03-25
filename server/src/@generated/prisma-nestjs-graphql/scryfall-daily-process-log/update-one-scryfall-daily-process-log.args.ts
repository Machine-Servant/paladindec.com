import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogUpdateInput } from './scryfall-daily-process-log-update.input';
import { ScryfallDailyProcessLogWhereUniqueInput } from './scryfall-daily-process-log-where-unique.input';

@ArgsType()
export class UpdateOneScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogUpdateInput, { nullable: false })
  data!: ScryfallDailyProcessLogUpdateInput;

  @Field(() => ScryfallDailyProcessLogWhereUniqueInput, { nullable: false })
  where!: ScryfallDailyProcessLogWhereUniqueInput;
}
