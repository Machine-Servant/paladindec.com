import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  externalAuthId = 'externalAuthId',
  email = 'email',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  id = 'id',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
