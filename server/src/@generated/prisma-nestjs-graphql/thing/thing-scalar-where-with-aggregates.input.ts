import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ThingScalarWhereWithAggregatesInput {
  @Field(() => [ThingScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ThingScalarWhereWithAggregatesInput>;

  @Field(() => [ThingScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ThingScalarWhereWithAggregatesInput>;

  @Field(() => [ThingScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ThingScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;
}
