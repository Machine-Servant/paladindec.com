import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutCollectionsInput } from '../card/card-create-nested-one-without-collections.input';
import { CollectionCreateNestedOneWithoutCardsInput } from '../collection/collection-create-nested-one-without-cards.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCreateInput {
  @Field(() => CardCreateNestedOneWithoutCollectionsInput, { nullable: false })
  card!: CardCreateNestedOneWithoutCollectionsInput;

  @Field(() => CollectionCreateNestedOneWithoutCardsInput, { nullable: false })
  collection!: CollectionCreateNestedOneWithoutCardsInput;

  @Field(() => Int, { nullable: true })
  count?: number;
}
