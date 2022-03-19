import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCollectionsInput } from '../user/user-create-nested-one-without-collections.input';

@InputType()
export class CollectionCreateWithoutCardsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutCollectionsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutCollectionsInput;
}
