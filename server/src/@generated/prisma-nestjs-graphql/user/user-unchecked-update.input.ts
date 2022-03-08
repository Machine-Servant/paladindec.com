import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CollectionUncheckedUpdateManyWithoutUserInput } from '../collection/collection-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    externalAuthId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => CollectionUncheckedUpdateManyWithoutUserInput, {nullable:true})
    collections?: CollectionUncheckedUpdateManyWithoutUserInput;
}
