import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereUniqueInput } from './scryfall-daily-process-log-where-unique.input';

@ArgsType()
export class FindUniqueScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogWhereUniqueInput, { nullable: false })
  where!: ScryfallDailyProcessLogWhereUniqueInput;
}
