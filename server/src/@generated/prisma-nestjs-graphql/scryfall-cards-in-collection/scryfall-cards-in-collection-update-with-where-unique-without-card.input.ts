import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithoutCardInput } from './scryfall-cards-in-collection-update-without-card.input';

@InputType()
export class ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionUpdateWithoutCardInput, {
    nullable: false,
  })
  data!: ScryfallCardsInCollectionUpdateWithoutCardInput;
}
