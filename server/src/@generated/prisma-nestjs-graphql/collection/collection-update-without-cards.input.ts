import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCollectionsInput } from '../user/user-update-one-required-without-collections.input';

@InputType()
export class CollectionUpdateWithoutCardsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCollectionsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCollectionsInput;
}
