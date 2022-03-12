import { registerEnumType } from '@nestjs/graphql';

export enum CollectionScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CollectionScalarFieldEnum, { name: 'CollectionScalarFieldEnum', description: undefined })
