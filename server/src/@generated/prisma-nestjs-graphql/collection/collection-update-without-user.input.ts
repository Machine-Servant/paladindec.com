import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardsInCollectionUpdateManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-update-many-without-collection.input';

@InputType()
export class CollectionUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CardsInCollectionUpdateManyWithoutCollectionInput, {nullable:true})
    cards?: CardsInCollectionUpdateManyWithoutCollectionInput;
}
