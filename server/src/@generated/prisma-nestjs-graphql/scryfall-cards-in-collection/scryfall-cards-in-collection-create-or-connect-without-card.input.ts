import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionCreateWithoutCardInput } from './scryfall-cards-in-collection-create-without-card.input';

@InputType()
export class ScryfallCardsInCollectionCreateOrConnectWithoutCardInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionCreateWithoutCardInput, {
    nullable: false,
  })
  create!: ScryfallCardsInCollectionCreateWithoutCardInput;
}
