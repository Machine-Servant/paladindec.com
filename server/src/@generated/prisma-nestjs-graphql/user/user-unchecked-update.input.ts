import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { CollectionUncheckedUpdateManyWithoutUserInput } from '../collection/collection-unchecked-update-many-without-user.input';
import { TagUncheckedUpdateManyWithoutUserInput } from '../tag/tag-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  externalAuthId?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => CollectionUncheckedUpdateManyWithoutUserInput, {
    nullable: true,
  })
  collections?: CollectionUncheckedUpdateManyWithoutUserInput;

  @Field(() => TagUncheckedUpdateManyWithoutUserInput, { nullable: true })
  Tag?: TagUncheckedUpdateManyWithoutUserInput;
}
