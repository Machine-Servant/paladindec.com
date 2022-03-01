import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionUpdateInput } from './scryfall-cards-in-collection-update.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';

@ArgsType()
export class UpdateOneScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionUpdateInput, { nullable: false })
  data!: ScryfallCardsInCollectionUpdateInput;

  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;
}
