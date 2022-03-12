import { registerEnumType } from '@nestjs/graphql';

export enum CardsInCollectionScalarFieldEnum {
    cardId = "cardId",
    collectionId = "collectionId",
    isFoil = "isFoil",
    isEtched = "isEtched",
    count = "count",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CardsInCollectionScalarFieldEnum, { name: 'CardsInCollectionScalarFieldEnum', description: undefined })
