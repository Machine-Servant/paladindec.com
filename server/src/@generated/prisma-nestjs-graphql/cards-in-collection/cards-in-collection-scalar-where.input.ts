import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionScalarWhereInput {

    @Field(() => [CardsInCollectionScalarWhereInput], {nullable:true})
    AND?: Array<CardsInCollectionScalarWhereInput>;

    @Field(() => [CardsInCollectionScalarWhereInput], {nullable:true})
    OR?: Array<CardsInCollectionScalarWhereInput>;

    @Field(() => [CardsInCollectionScalarWhereInput], {nullable:true})
    NOT?: Array<CardsInCollectionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    cardId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    collectionId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFoil?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isEtched?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
