import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithoutCollectionInput } from './scryfall-cards-in-collection-update-without-collection.input';

@InputType()
export class ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionUpdateWithoutCollectionInput, {
    nullable: false,
  })
  data!: ScryfallCardsInCollectionUpdateWithoutCollectionInput;
}
