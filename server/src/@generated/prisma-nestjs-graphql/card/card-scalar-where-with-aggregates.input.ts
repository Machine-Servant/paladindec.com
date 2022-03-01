import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CardScalarWhereWithAggregatesInput {
  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CardScalarWhereWithAggregatesInput>;

  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CardScalarWhereWithAggregatesInput>;

  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CardScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scryfallCardId?: StringWithAggregatesFilter;
}
