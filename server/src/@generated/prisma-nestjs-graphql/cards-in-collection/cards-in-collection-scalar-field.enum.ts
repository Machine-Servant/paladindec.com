import { registerEnumType } from '@nestjs/graphql';

export enum CardsInCollectionScalarFieldEnum {
  cardId = 'cardId',
  collectionId = 'collectionId',
  count = 'count',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  isEtched = 'isEtched',
  isFoil = 'isFoil',
  id = 'id',
}

registerEnumType(CardsInCollectionScalarFieldEnum, {
  name: 'CardsInCollectionScalarFieldEnum',
  description: undefined,
});
