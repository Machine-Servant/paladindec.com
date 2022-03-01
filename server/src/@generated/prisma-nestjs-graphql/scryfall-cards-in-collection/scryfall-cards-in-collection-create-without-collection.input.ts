import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutCollectionsInput } from '../scryfall-card/scryfall-card-create-nested-one-without-collections.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionCreateWithoutCollectionInput {
  @Field(() => ScryfallCardCreateNestedOneWithoutCollectionsInput, {
    nullable: false,
  })
  card!: ScryfallCardCreateNestedOneWithoutCollectionsInput;

  @Field(() => Int, { nullable: true })
  count?: number;
}
