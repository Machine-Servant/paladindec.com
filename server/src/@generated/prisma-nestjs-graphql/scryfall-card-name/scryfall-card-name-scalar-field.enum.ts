import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallCardNameScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(ScryfallCardNameScalarFieldEnum, { name: 'ScryfallCardNameScalarFieldEnum', description: undefined })
