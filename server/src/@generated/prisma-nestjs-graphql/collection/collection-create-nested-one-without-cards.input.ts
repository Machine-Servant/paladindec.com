import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutCardsInput } from './collection-create-without-cards.input';
import { CollectionCreateOrConnectWithoutCardsInput } from './collection-create-or-connect-without-cards.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@InputType()
export class CollectionCreateNestedOneWithoutCardsInput {
  @Field(() => CollectionCreateWithoutCardsInput, { nullable: true })
  create?: CollectionCreateWithoutCardsInput;

  @Field(() => CollectionCreateOrConnectWithoutCardsInput, { nullable: true })
  connectOrCreate?: CollectionCreateOrConnectWithoutCardsInput;

  @Field(() => CollectionWhereUniqueInput, { nullable: true })
  connect?: CollectionWhereUniqueInput;
}
