import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateInput } from './scryfall-cards-in-collection-create.input';

@ArgsType()
export class CreateOneScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionCreateInput, { nullable: false })
  data!: ScryfallCardsInCollectionCreateInput;
}
