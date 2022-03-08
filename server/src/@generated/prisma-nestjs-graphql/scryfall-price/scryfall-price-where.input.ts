import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { ScryfallCardRelationFilter } from '../scryfall-card/scryfall-card-relation-filter.input';
import { CardRelationFilter } from '../card/card-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ScryfallPriceWhereInput {

    @Field(() => [ScryfallPriceWhereInput], {nullable:true})
    AND?: Array<ScryfallPriceWhereInput>;

    @Field(() => [ScryfallPriceWhereInput], {nullable:true})
    OR?: Array<ScryfallPriceWhereInput>;

    @Field(() => [ScryfallPriceWhereInput], {nullable:true})
    NOT?: Array<ScryfallPriceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    eur?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    tix?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    usd?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    eurFoil?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    usdFoil?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    usdEtched?: FloatNullableFilter;

    @Field(() => ScryfallCardRelationFilter, {nullable:true})
    card?: ScryfallCardRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    cardId?: StringFilter;

    @Field(() => CardRelationFilter, {nullable:true})
    currentPriceOfCard?: CardRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    currentPriceOfCardId?: StringNullableFilter;
}
