import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallCardNameScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ScryfallCardNameScalarFieldEnum, { name: 'ScryfallCardNameScalarFieldEnum', description: undefined })
