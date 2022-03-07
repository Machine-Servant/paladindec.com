import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCollectionsInput } from '../user/user-create-nested-one-without-collections.input';

@InputType()
export class CollectionCreateWithoutCardsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => UserCreateNestedOneWithoutCollectionsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutCollectionsInput;
}
