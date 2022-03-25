import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCreateInput } from './scryfall-daily-process-log-create.input';

@ArgsType()
export class CreateOneScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogCreateInput, { nullable: false })
  data!: ScryfallDailyProcessLogCreateInput;
}
