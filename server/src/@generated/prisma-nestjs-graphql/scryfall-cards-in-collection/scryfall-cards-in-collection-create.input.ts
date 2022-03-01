import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutCollectionsInput } from '../scryfall-card/scryfall-card-create-nested-one-without-collections.input';
import { CollectionCreateNestedOneWithoutCardsInput } from '../collection/collection-create-nested-one-without-cards.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionCreateInput {
  @Field(() => ScryfallCardCreateNestedOneWithoutCollectionsInput, {
    nullable: false,
  })
  card!: ScryfallCardCreateNestedOneWithoutCollectionsInput;

  @Field(() => CollectionCreateNestedOneWithoutCardsInput, { nullable: false })
  collection!: CollectionCreateNestedOneWithoutCardsInput;

  @Field(() => Int, { nullable: true })
  count?: number;
}
