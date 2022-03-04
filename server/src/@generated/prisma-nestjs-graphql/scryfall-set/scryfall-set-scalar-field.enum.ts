import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallSetScalarFieldEnum {
    id = "id",
    code = "code",
    mtgoCode = "mtgoCode",
    arenaCode = "arenaCode",
    tcgPlayerId = "tcgPlayerId",
    name = "name",
    setType = "setType",
    releasedAt = "releasedAt",
    blockCode = "blockCode",
    block = "block",
    parentSetCode = "parentSetCode",
    cardCount = "cardCount",
    printedSize = "printedSize",
    isDigital = "isDigital",
    isFoilOnly = "isFoilOnly",
    isNonFoilOnly = "isNonFoilOnly",
    scryfallUri = "scryfallUri",
    uri = "uri",
    iconSvgUri = "iconSvgUri",
    searchUri = "searchUri"
}


registerEnumType(ScryfallSetScalarFieldEnum, { name: 'ScryfallSetScalarFieldEnum', description: undefined })
