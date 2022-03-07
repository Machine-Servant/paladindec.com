import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCollectionsInput } from './user-create-without-collections.input';
import { UserCreateOrConnectWithoutCollectionsInput } from './user-create-or-connect-without-collections.input';
import { UserUpsertWithoutCollectionsInput } from './user-upsert-without-collections.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCollectionsInput } from './user-update-without-collections.input';

@InputType()
export class UserUpdateOneRequiredWithoutCollectionsInput {
  @Field(() => UserCreateWithoutCollectionsInput, { nullable: true })
  create?: UserCreateWithoutCollectionsInput;

  @Field(() => UserCreateOrConnectWithoutCollectionsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;

  @Field(() => UserUpsertWithoutCollectionsInput, { nullable: true })
  upsert?: UserUpsertWithoutCollectionsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutCollectionsInput, { nullable: true })
  update?: UserUpdateWithoutCollectionsInput;
}
