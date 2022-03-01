import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';

@InputType()
export class ScryfallCardsInCollectionListRelationFilter {
  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  every?: ScryfallCardsInCollectionWhereInput;

  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  some?: ScryfallCardsInCollectionWhereInput;

  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  none?: ScryfallCardsInCollectionWhereInput;
}
