import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionCreateInput } from './scryfall-cards-in-collection-create.input';
import { ScryfallCardsInCollectionUpdateInput } from './scryfall-cards-in-collection-update.input';

@ArgsType()
export class UpsertOneScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => ScryfallCardsInCollectionCreateInput, { nullable: false })
  create!: ScryfallCardsInCollectionCreateInput;

  @Field(() => ScryfallCardsInCollectionUpdateInput, { nullable: false })
  update!: ScryfallCardsInCollectionUpdateInput;
}
