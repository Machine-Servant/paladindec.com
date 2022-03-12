import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutReferencedByInput } from '../scryfall-card/scryfall-card-update-one-required-without-referenced-by.input';
import { ScryfallCardUpdateOneRequiredWithoutRelatedToInput } from '../scryfall-card/scryfall-card-update-one-required-without-related-to.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallRelatedCardUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ScryfallCardUpdateOneRequiredWithoutReferencedByInput, {nullable:true})
    reference?: ScryfallCardUpdateOneRequiredWithoutReferencedByInput;

    @Field(() => ScryfallCardUpdateOneRequiredWithoutRelatedToInput, {nullable:true})
    card?: ScryfallCardUpdateOneRequiredWithoutRelatedToInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    component?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    typeLine?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uri?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
