import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ScryfallCardListRelationFilter } from '../scryfall-card/scryfall-card-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallSetWhereInput {

    @Field(() => [ScryfallSetWhereInput], {nullable:true})
    AND?: Array<ScryfallSetWhereInput>;

    @Field(() => [ScryfallSetWhereInput], {nullable:true})
    OR?: Array<ScryfallSetWhereInput>;

    @Field(() => [ScryfallSetWhereInput], {nullable:true})
    NOT?: Array<ScryfallSetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mtgoCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    arenaCode?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    tcgPlayerId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    setType?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    releasedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    blockCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    block?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentSetCode?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    cardCount?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    printedSize?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDigital?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFoilOnly?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isNonFoilOnly?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    scryfallUri?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    uri?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iconSvgUri?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    searchUri?: StringFilter;

    @Field(() => ScryfallCardListRelationFilter, {nullable:true})
    cards?: ScryfallCardListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
