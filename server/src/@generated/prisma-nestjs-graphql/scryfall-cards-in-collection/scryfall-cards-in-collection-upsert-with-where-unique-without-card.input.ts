import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithoutCardInput } from './scryfall-cards-in-collection-update-without-card.input';
import { ScryfallCardsInCollectionCreateWithoutCardInput } from './scryfall-cards-in-collection-create-without-card.input';

@InputType()
export class ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionUpdateWithoutCardInput, {
    nullable: false,
  })
  update!: ScryfallCardsInCollectionUpdateWithoutCardInput;

  @Field(() => ScryfallCardsInCollectionCreateWithoutCardInput, {
    nullable: false,
  })
  create!: ScryfallCardsInCollectionCreateWithoutCardInput;
}
