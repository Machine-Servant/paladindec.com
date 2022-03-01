import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';

@ArgsType()
export class DeleteManyScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  where?: ScryfallCardsInCollectionWhereInput;
}
