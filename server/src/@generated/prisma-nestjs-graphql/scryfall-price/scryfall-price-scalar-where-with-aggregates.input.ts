import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ScryfallPriceScalarWhereWithAggregatesInput {
  @Field(() => [ScryfallPriceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ScryfallPriceScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallPriceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ScryfallPriceScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallPriceScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ScryfallPriceScalarWhereWithAggregatesInput>;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  date?: DateTimeWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  eur?: FloatNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  tix?: FloatNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  usd?: FloatNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  eurFoil?: FloatNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  usdFoil?: FloatNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  usdEtched?: FloatNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: StringWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  currentPriceOfCardId?: StringNullableWithAggregatesFilter;
}
