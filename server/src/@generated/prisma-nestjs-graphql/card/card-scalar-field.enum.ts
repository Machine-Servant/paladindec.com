import { registerEnumType } from '@nestjs/graphql';

export enum CardScalarFieldEnum {
    id = "id",
    scryfallCardId = "scryfallCardId",
    name = "name",
    collectorNumber = "collectorNumber",
    isBorderless = "isBorderless",
    isShowcase = "isShowcase",
    isPaper = "isPaper",
    isExtendedArt = "isExtendedArt",
    isRetro = "isRetro",
    canBeNonFoil = "canBeNonFoil",
    canBeFoil = "canBeFoil",
    canBeEtched = "canBeEtched",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CardScalarFieldEnum, { name: 'CardScalarFieldEnum', description: undefined })
