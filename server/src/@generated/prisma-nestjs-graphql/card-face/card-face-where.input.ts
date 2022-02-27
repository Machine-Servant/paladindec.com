import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CardRelationFilter } from '../card/card-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class CardFaceWhereInput {
  @Field(() => [CardFaceWhereInput], { nullable: true })
  AND?: Array<CardFaceWhereInput>;

  @Field(() => [CardFaceWhereInput], { nullable: true })
  OR?: Array<CardFaceWhereInput>;

  @Field(() => [CardFaceWhereInput], { nullable: true })
  NOT?: Array<CardFaceWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => CardRelationFilter, { nullable: true })
  card?: CardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  artist?: StringNullableFilter;

  @Field(() => DecimalNullableFilter, { nullable: true })
  cmc?: DecimalNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIndicator?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colors?: StringNullableListFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  flavorText?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  illustrationId?: StringNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  imageUris?: JsonNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  layout?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  loyalty?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  manaCost?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  oracleId?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  oracleText?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  power?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedName?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedText?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedTypeLine?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  toughness?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  typeLine?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  watermark?: StringNullableFilter;
}
