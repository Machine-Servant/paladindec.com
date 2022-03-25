import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTagInput } from './user-create-without-tag.input';
import { UserCreateOrConnectWithoutTagInput } from './user-create-or-connect-without-tag.input';
import { UserUpsertWithoutTagInput } from './user-upsert-without-tag.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTagInput } from './user-update-without-tag.input';

@InputType()
export class UserUpdateOneRequiredWithoutTagInput {
  @Field(() => UserCreateWithoutTagInput, { nullable: true })
  create?: UserCreateWithoutTagInput;

  @Field(() => UserCreateOrConnectWithoutTagInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutTagInput;

  @Field(() => UserUpsertWithoutTagInput, { nullable: true })
  upsert?: UserUpsertWithoutTagInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutTagInput, { nullable: true })
  update?: UserUpdateWithoutTagInput;
}
