import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallRelatedCardScalarFieldEnum {
    id = "id",
    referenceId = "referenceId",
    cardId = "cardId",
    component = "component",
    name = "name",
    typeLine = "typeLine",
    uri = "uri"
}


registerEnumType(ScryfallRelatedCardScalarFieldEnum, { name: 'ScryfallRelatedCardScalarFieldEnum', description: undefined })
