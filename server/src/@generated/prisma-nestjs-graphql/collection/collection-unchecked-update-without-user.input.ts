import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardsInCollectionUncheckedUpdateManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-collection.input';

@InputType()
export class CollectionUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CardsInCollectionUncheckedUpdateManyWithoutCollectionInput, {nullable:true})
    cards?: CardsInCollectionUncheckedUpdateManyWithoutCollectionInput;
}