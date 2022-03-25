import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
  id = 'id',
  name = 'name',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(TagScalarFieldEnum, {
  name: 'TagScalarFieldEnum',
  description: undefined,
});
