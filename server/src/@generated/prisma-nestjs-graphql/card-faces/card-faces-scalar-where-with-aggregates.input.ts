import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class CardFacesScalarWhereWithAggregatesInput {
  @Field(() => [CardFacesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CardFacesScalarWhereWithAggregatesInput>;

  @Field(() => [CardFacesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CardFacesScalarWhereWithAggregatesInput>;

  @Field(() => [CardFacesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CardFacesScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  artist?: StringNullableWithAggregatesFilter;

  @Field(() => DecimalNullableWithAggregatesFilter, { nullable: true })
  cmc?: DecimalNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIndicator?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colors?: StringNullableListFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  flavorText?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  illustrationId?: StringNullableWithAggregatesFilter;

  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  imageUris?: JsonNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  layout?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  loyalty?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  manaCost?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  oracleId?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  oracleText?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  power?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedName?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedText?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedTypeLine?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  toughness?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  typeLine?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  watermark?: StringNullableWithAggregatesFilter;
}
