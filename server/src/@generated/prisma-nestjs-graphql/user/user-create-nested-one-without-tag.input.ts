import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagInput } from './user-create-without-tag.input';
import { UserCreateOrConnectWithoutTagInput } from './user-create-or-connect-without-tag.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTagInput {
  @Field(() => UserCreateWithoutTagInput, { nullable: true })
  create?: UserCreateWithoutTagInput;

  @Field(() => UserCreateOrConnectWithoutTagInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutTagInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;
}
