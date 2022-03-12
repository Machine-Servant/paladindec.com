import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardNameScalarWhereWithAggregatesInput {
  @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
