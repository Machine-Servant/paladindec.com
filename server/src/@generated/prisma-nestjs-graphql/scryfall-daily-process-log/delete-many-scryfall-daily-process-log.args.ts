import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereInput } from './scryfall-daily-process-log-where.input';

@ArgsType()
export class DeleteManyScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogWhereInput, { nullable: true })
  where?: ScryfallDailyProcessLogWhereInput;
}
