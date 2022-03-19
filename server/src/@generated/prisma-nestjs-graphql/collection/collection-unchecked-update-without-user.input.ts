import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { CardsInCollectionUncheckedUpdateManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-collection.input';

@InputType()
export class CollectionUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CardsInCollectionUncheckedUpdateManyWithoutCollectionInput, {
    nullable: true,
  })
  cards?: CardsInCollectionUncheckedUpdateManyWithoutCollectionInput;
}
