import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ScryfallPriceScalarWhereInput {
  @Field(() => [ScryfallPriceScalarWhereInput], { nullable: true })
  AND?: Array<ScryfallPriceScalarWhereInput>;

  @Field(() => [ScryfallPriceScalarWhereInput], { nullable: true })
  OR?: Array<ScryfallPriceScalarWhereInput>;

  @Field(() => [ScryfallPriceScalarWhereInput], { nullable: true })
  NOT?: Array<ScryfallPriceScalarWhereInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  date?: DateTimeFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  eur?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  tix?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  usd?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  eurFoil?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  usdFoil?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  usdEtched?: FloatNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  currentPriceOfCardId?: StringNullableFilter;
}
