import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCollectionsInput } from './user-create-without-collections.input';

@InputType()
export class UserCreateOrConnectWithoutCollectionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCollectionsInput, {nullable:false})
    create!: UserCreateWithoutCollectionsInput;
}
