import { registerEnumType } from '@nestjs/graphql';

export enum ThingScalarFieldEnum {
  id = 'id',
}

registerEnumType(ThingScalarFieldEnum, {
  name: 'ThingScalarFieldEnum',
  description: undefined,
});
