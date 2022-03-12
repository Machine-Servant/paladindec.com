import { Field, InputType, OmitType, PickType } from '@nestjs/graphql';
import { CardsInCollectionCreateInput } from '../../../@generated/prisma-nestjs-graphql/cards-in-collection/cards-in-collection-create.input';

@InputType()
export class AddCardToCollectionInput extends OmitType(
  CardsInCollectionCreateInput,
  ['card', 'collection'] as const,
) {
  @Field(() => String)
  collectionId: string;

  @Field(() => String)
  cardId: string;
}
