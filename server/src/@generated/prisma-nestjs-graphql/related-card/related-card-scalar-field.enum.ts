import { registerEnumType } from '@nestjs/graphql';

export enum RelatedCardScalarFieldEnum {
  id = 'id',
  referenceId = 'referenceId',
  cardId = 'cardId',
  component = 'component',
  name = 'name',
  typeLine = 'typeLine',
  uri = 'uri',
}

registerEnumType(RelatedCardScalarFieldEnum, {
  name: 'RelatedCardScalarFieldEnum',
  description: undefined,
});
