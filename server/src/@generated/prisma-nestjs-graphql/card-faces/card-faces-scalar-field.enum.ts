import { registerEnumType } from '@nestjs/graphql';

export enum CardFacesScalarFieldEnum {
  id = 'id',
  cardId = 'cardId',
  artist = 'artist',
  cmc = 'cmc',
  colorIndicator = 'colorIndicator',
  colors = 'colors',
  flavorText = 'flavorText',
  illustrationId = 'illustrationId',
  imageUris = 'imageUris',
  layout = 'layout',
  loyalty = 'loyalty',
  manaCost = 'manaCost',
  name = 'name',
  oracleId = 'oracleId',
  oracleText = 'oracleText',
  power = 'power',
  printedName = 'printedName',
  printedText = 'printedText',
  printedTypeLine = 'printedTypeLine',
  toughness = 'toughness',
  typeLine = 'typeLine',
  watermark = 'watermark',
}

registerEnumType(CardFacesScalarFieldEnum, {
  name: 'CardFacesScalarFieldEnum',
  description: undefined,
});
