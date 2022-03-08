import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutCardInput } from '../scryfall-card/scryfall-card-update-one-required-without-card.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CardsInCollectionUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-update-many-without-card.input';

@InputType()
export class CardUpdateWithoutCurrentPriceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ScryfallCardUpdateOneRequiredWithoutCardInput, {nullable:true})
    scryfallCard?: ScryfallCardUpdateOneRequiredWithoutCardInput;

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

    @Field(() => CardsInCollectionUpdateManyWithoutCardInput, {nullable:true})
    collections?: CardsInCollectionUpdateManyWithoutCardInput;
}
