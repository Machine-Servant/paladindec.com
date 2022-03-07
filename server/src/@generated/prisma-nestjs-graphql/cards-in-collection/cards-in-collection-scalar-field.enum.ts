import { registerEnumType } from '@nestjs/graphql';

export enum CardsInCollectionScalarFieldEnum {
  cardId = 'cardId',
  collectionId = 'collectionId',
  isFoil = 'isFoil',
  isEtched = 'isEtched',
  count = 'count',
}

registerEnumType(CardsInCollectionScalarFieldEnum, {
  name: 'CardsInCollectionScalarFieldEnum',
  description: undefined,
});
