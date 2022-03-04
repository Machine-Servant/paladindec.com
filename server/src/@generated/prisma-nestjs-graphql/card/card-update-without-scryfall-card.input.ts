import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-update-one-without-current-price-of-card.input';
import { CardsInCollectionUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-update-many-without-card.input';

@InputType()
export class CardUpdateWithoutScryfallCardInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    collectorNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isBorderless?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isShowcase?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPaper?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    canBeFoil?: BoolFieldUpdateOperationsInput;

    @Field(() => ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput, {nullable:true})
    currentPrice?: ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput;

    @Field(() => CardsInCollectionUpdateManyWithoutCardInput, {nullable:true})
    collections?: CardsInCollectionUpdateManyWithoutCardInput;
}