import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCollectionsInput } from '../user/user-update-one-required-without-collections.input';
import { CardsInCollectionUpdateManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-update-many-without-collection.input';

@InputType()
export class CollectionUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutCollectionsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => CardsInCollectionUpdateManyWithoutCollectionInput, {
    nullable: true,
  })
  cards?: CardsInCollectionUpdateManyWithoutCollectionInput;
}
