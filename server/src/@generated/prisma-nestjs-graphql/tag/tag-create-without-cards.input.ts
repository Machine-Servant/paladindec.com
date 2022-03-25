import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTagInput } from '../user/user-create-nested-one-without-tag.input';

@InputType()
export class TagCreateWithoutCardsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutTagInput, { nullable: false })
  user!: UserCreateNestedOneWithoutTagInput;
}
