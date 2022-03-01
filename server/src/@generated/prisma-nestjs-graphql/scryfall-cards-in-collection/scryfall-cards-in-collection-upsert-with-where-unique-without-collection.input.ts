import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithoutCollectionInput } from './scryfall-cards-in-collection-update-without-collection.input';
import { ScryfallCardsInCollectionCreateWithoutCollectionInput } from './scryfall-cards-in-collection-create-without-collection.input';

@InputType()
export class ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionUpdateWithoutCollectionInput, {
    nullable: false,
  })
  update!: ScryfallCardsInCollectionUpdateWithoutCollectionInput;

  @Field(() => ScryfallCardsInCollectionCreateWithoutCollectionInput, {
    nullable: false,
  })
  create!: ScryfallCardsInCollectionCreateWithoutCollectionInput;
}
