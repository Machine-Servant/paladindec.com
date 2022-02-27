import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RelatedCardScalarWhereWithAggregatesInput {
  @Field(() => [RelatedCardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RelatedCardScalarWhereWithAggregatesInput>;

  @Field(() => [RelatedCardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RelatedCardScalarWhereWithAggregatesInput>;

  @Field(() => [RelatedCardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RelatedCardScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  referenceId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  component?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  typeLine?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  uri?: StringWithAggregatesFilter;
}
