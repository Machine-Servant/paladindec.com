import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTagInput } from './user-update-without-tag.input';
import { UserCreateWithoutTagInput } from './user-create-without-tag.input';

@InputType()
export class UserUpsertWithoutTagInput {
  @Field(() => UserUpdateWithoutTagInput, { nullable: false })
  update!: UserUpdateWithoutTagInput;

  @Field(() => UserCreateWithoutTagInput, { nullable: false })
  create!: UserCreateWithoutTagInput;
}
