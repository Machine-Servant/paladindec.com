import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallCardsInCollectionScalarFieldEnum {
  cardId = 'cardId',
  collectionId = 'collectionId',
  count = 'count',
}

registerEnumType(ScryfallCardsInCollectionScalarFieldEnum, {
  name: 'ScryfallCardsInCollectionScalarFieldEnum',
  description: undefined,
});
