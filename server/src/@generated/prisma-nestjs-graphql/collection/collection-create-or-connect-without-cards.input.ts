import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionCreateWithoutCardsInput } from './collection-create-without-cards.input';

@InputType()
export class CollectionCreateOrConnectWithoutCardsInput {
  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;

  @Field(() => CollectionCreateWithoutCardsInput, { nullable: false })
  create!: CollectionCreateWithoutCardsInput;
}
