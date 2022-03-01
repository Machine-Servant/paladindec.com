import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';

@ArgsType()
export class FindUniqueScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: false })
  where!: ScryfallCardsInCollectionWhereUniqueInput;
}
