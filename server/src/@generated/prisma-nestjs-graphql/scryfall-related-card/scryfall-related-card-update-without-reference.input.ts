import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutRelatedToInput } from '../scryfall-card/scryfall-card-update-one-required-without-related-to.input';

@InputType()
export class ScryfallRelatedCardUpdateWithoutReferenceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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
}
