import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionUncheckedCreateNestedManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-card.input';

@InputType()
export class CardUncheckedCreateWithoutCurrentPriceInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    scryfallCardId!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;

    @Field(() => CardsInCollectionUncheckedCreateNestedManyWithoutCardInput, {nullable:true})
    collections?: CardsInCollectionUncheckedCreateNestedManyWithoutCardInput;
}
