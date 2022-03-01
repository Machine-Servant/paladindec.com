import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardsInCollectionUncheckedUpdateManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-collection.input';

@InputType()
export class CollectionUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: StringFieldUpdateOperationsInput;

  @Field(() => CardsInCollectionUncheckedUpdateManyWithoutCollectionInput, {
    nullable: true,
  })
  cards?: CardsInCollectionUncheckedUpdateManyWithoutCollectionInput;
}
