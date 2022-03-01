import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionCreateWithoutCollectionInput } from './scryfall-cards-in-collection-create-without-collection.input';

@InputType()
export class ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionCreateWithoutCollectionInput, {
    nullable: false,
  })
  create!: ScryfallCardsInCollectionCreateWithoutCollectionInput;
}
