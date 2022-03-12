import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionUncheckedCreateNestedManyWithoutUserInput } from '../collection/collection-unchecked-create-nested-many-without-user.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    externalAuthId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => CollectionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
