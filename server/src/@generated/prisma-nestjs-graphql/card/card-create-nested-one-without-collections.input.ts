import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCollectionsInput } from './card-create-without-collections.input';
import { CardCreateOrConnectWithoutCollectionsInput } from './card-create-or-connect-without-collections.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedOneWithoutCollectionsInput {
  @Field(() => CardCreateWithoutCollectionsInput, { nullable: true })
  create?: CardCreateWithoutCollectionsInput;

  @Field(() => CardCreateOrConnectWithoutCollectionsInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutCollectionsInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
