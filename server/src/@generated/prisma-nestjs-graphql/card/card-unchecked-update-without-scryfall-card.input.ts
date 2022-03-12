import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-unchecked-update-one-without-current-price-of-card.input';
import { CardsInCollectionUncheckedUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-card.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardUncheckedUpdateWithoutScryfallCardInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    collectorNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isBorderless?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isShowcase?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPaper?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isExtendedArt?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRetro?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    canBeNonFoil?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    canBeFoil?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    canBeEtched?: BoolFieldUpdateOperationsInput;

    @Field(() => ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput, {nullable:true})
    currentPrice?: ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput;

    @Field(() => CardsInCollectionUncheckedUpdateManyWithoutCardInput, {nullable:true})
    collections?: CardsInCollectionUncheckedUpdateManyWithoutCardInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
