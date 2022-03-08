import { registerEnumType } from '@nestjs/graphql';

export enum CollectionScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId"
}


registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })
