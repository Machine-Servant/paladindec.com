import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

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

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isBorderless?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isShowcase?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  canBeFoil?: BoolWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  collectorNumber?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPaper?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  canBeEtched?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  canBeNonFoil?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isExtendedArt?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isRetro?: BoolWithAggregatesFilter;
}
