import { registerEnumType } from '@nestjs/graphql';

export enum CardScalarFieldEnum {
    id = "id",
    scryfallCardId = "scryfallCardId",
    collectorNumber = "collectorNumber",
    isBorderless = "isBorderless",
    isShowcase = "isShowcase",
    isPaper = "isPaper",
    canBeFoil = "canBeFoil"
}


registerEnumType(CardScalarFieldEnum, { name: 'CardScalarFieldEnum', description: undefined })
