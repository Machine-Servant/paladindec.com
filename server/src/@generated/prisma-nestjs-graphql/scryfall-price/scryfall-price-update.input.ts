import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput } from '../scryfall-card/scryfall-card-update-one-required-without-scryfall-price.input';
import { CardUpdateOneWithoutCurrentPriceInput } from '../card/card-update-one-without-current-price.input';

@InputType()
export class ScryfallPriceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    eur?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    tix?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    usd?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    eurFoil?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    usdFoil?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    usdEtched?: NullableFloatFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput, {nullable:true})
    card?: ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput;

    @Field(() => CardUpdateOneWithoutCurrentPriceInput, {nullable:true})
    currentPriceOfCard?: CardUpdateOneWithoutCurrentPriceInput;
}
