import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCollectionsInput } from './user-update-without-collections.input';
import { UserCreateWithoutCollectionsInput } from './user-create-without-collections.input';

@InputType()
export class UserUpsertWithoutCollectionsInput {

    @Field(() => UserUpdateWithoutCollectionsInput, {nullable:false})
    update!: UserUpdateWithoutCollectionsInput;

    @Field(() => UserCreateWithoutCollectionsInput, {nullable:false})
    create!: UserCreateWithoutCollectionsInput;
}
