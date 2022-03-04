import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCollectionsInput } from './user-create-without-collections.input';
import { UserCreateOrConnectWithoutCollectionsInput } from './user-create-or-connect-without-collections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCollectionsInput {

    @Field(() => UserCreateWithoutCollectionsInput, {nullable:true})
    create?: UserCreateWithoutCollectionsInput;

    @Field(() => UserCreateOrConnectWithoutCollectionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
