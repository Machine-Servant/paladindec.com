import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogUpdateManyMutationInput } from './scryfall-daily-process-log-update-many-mutation.input';
import { ScryfallDailyProcessLogWhereInput } from './scryfall-daily-process-log-where.input';

@ArgsType()
export class UpdateManyScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ScryfallDailyProcessLogUpdateManyMutationInput;

  @Field(() => ScryfallDailyProcessLogWhereInput, { nullable: true })
  where?: ScryfallDailyProcessLogWhereInput;
}
