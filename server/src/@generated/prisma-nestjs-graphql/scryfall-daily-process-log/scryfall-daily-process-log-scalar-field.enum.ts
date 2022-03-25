import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallDailyProcessLogScalarFieldEnum {
  id = 'id',
  isCompleted = 'isCompleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ScryfallDailyProcessLogScalarFieldEnum, {
  name: 'ScryfallDailyProcessLogScalarFieldEnum',
  description: undefined,
});
