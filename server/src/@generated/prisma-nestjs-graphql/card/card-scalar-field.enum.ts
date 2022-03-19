import { registerEnumType } from '@nestjs/graphql';

export enum CardScalarFieldEnum {
  id = 'id',
  scryfallCardId = 'scryfallCardId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  isBorderless = 'isBorderless',
  isShowcase = 'isShowcase',
  canBeFoil = 'canBeFoil',
  collectorNumber = 'collectorNumber',
  isPaper = 'isPaper',
  name = 'name',
  canBeEtched = 'canBeEtched',
  canBeNonFoil = 'canBeNonFoil',
  isExtendedArt = 'isExtendedArt',
  isRetro = 'isRetro',
}

registerEnumType(CardScalarFieldEnum, {
  name: 'CardScalarFieldEnum',
  description: undefined,
});
