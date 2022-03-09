import { registerEnumType } from '@nestjs/graphql';

export enum CardScalarFieldEnum {
  id = 'id',
  scryfallCardId = 'scryfallCardId',
  name = 'name',
  collectorNumber = 'collectorNumber',
  isBorderless = 'isBorderless',
  isShowcase = 'isShowcase',
  isPaper = 'isPaper',
  isEtched = 'isEtched',
  canBeFoil = 'canBeFoil',
}

registerEnumType(CardScalarFieldEnum, {
  name: 'CardScalarFieldEnum',
  description: undefined,
});
