import { registerEnumType } from '@nestjs/graphql';

export enum CardScalarFieldEnum {
  id = 'id',
  scryfallCardId = 'scryfallCardId',
}

registerEnumType(CardScalarFieldEnum, {
  name: 'CardScalarFieldEnum',
  description: undefined,
});
