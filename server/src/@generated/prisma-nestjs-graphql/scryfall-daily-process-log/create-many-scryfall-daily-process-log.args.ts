import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogCreateManyInput } from './scryfall-daily-process-log-create-many.input';

@ArgsType()
export class CreateManyScryfallDailyProcessLogArgs {
  @Field(() => [ScryfallDailyProcessLogCreateManyInput], { nullable: false })
  data!: Array<ScryfallDailyProcessLogCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
