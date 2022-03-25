import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { CardsInCollectionUncheckedUpdateManyWithoutTagsInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-tags.input';

@InputType()
export class TagUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => CardsInCollectionUncheckedUpdateManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardsInCollectionUncheckedUpdateManyWithoutTagsInput;
}
