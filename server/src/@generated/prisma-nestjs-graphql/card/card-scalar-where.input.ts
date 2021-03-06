import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardScalarWhereInput {

    @Field(() => [CardScalarWhereInput], {nullable:true})
    AND?: Array<CardScalarWhereInput>;

    @Field(() => [CardScalarWhereInput], {nullable:true})
    OR?: Array<CardScalarWhereInput>;

    @Field(() => [CardScalarWhereInput], {nullable:true})
    NOT?: Array<CardScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    scryfallCardId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    collectorNumber?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBorderless?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isShowcase?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPaper?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isExtendedArt?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRetro?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canBeNonFoil?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canBeFoil?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    canBeEtched?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
