import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTagInput } from './user-create-without-tag.input';

@InputType()
export class UserCreateOrConnectWithoutTagInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutTagInput, { nullable: false })
  create!: UserCreateWithoutTagInput;
}
