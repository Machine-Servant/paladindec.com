import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallDailyProcessLogWhereInput } from './scryfall-daily-process-log-where.input';
import { ScryfallDailyProcessLogOrderByWithRelationInput } from './scryfall-daily-process-log-order-by-with-relation.input';
import { ScryfallDailyProcessLogWhereUniqueInput } from './scryfall-daily-process-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallDailyProcessLogScalarFieldEnum } from './scryfall-daily-process-log-scalar-field.enum';

@ArgsType()
export class FindManyScryfallDailyProcessLogArgs {
  @Field(() => ScryfallDailyProcessLogWhereInput, { nullable: true })
  where?: ScryfallDailyProcessLogWhereInput;

  @Field(() => [ScryfallDailyProcessLogOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallDailyProcessLogOrderByWithRelationInput>;

  @Field(() => ScryfallDailyProcessLogWhereUniqueInput, { nullable: true })
  cursor?: ScryfallDailyProcessLogWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ScryfallDailyProcessLogScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScryfallDailyProcessLogScalarFieldEnum>;
}
