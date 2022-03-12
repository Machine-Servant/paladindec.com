import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallCardScalarFieldEnum {
  id = 'id',
  arenaId = 'arenaId',
  lang = 'lang',
  mtgoId = 'mtgoId',
  mtgoFoilId = 'mtgoFoilId',
  multiverseIds = 'multiverseIds',
  tcgplayerId = 'tcgplayerId',
  tcgplayerEtchedId = 'tcgplayerEtchedId',
  cardmarketId = 'cardmarketId',
  oracleId = 'oracleId',
  printsSearchUri = 'printsSearchUri',
  rulingUri = 'rulingUri',
  scryfallUri = 'scryfallUri',
  uri = 'uri',
  allParts = 'allParts',
  cardFacesRaw = 'cardFacesRaw',
  cmc = 'cmc',
  colorIdentity = 'colorIdentity',
  colorIndicator = 'colorIndicator',
  colors = 'colors',
  edhrecRank = 'edhrecRank',
  handModifier = 'handModifier',
  keywords = 'keywords',
  layout = 'layout',
  legalities = 'legalities',
  lifeModifier = 'lifeModifier',
  loyalty = 'loyalty',
  manaCost = 'manaCost',
  name = 'name',
  oracleText = 'oracleText',
  oversized = 'oversized',
  power = 'power',
  producedMana = 'producedMana',
  reserved = 'reserved',
  toughness = 'toughness',
  typeLine = 'typeLine',
  artist = 'artist',
  booster = 'booster',
  borderColor = 'borderColor',
  cardBackId = 'cardBackId',
  collectorNumber = 'collectorNumber',
  contentWarning = 'contentWarning',
  digital = 'digital',
  finishes = 'finishes',
  flavorName = 'flavorName',
  frameEffects = 'frameEffects',
  frame = 'frame',
  fullArt = 'fullArt',
  games = 'games',
  highresImage = 'highresImage',
  illustrationId = 'illustrationId',
  imageStatus = 'imageStatus',
  imageUris = 'imageUris',
  prices = 'prices',
  printedName = 'printedName',
  printedText = 'printedText',
  printedTypeLine = 'printedTypeLine',
  promo = 'promo',
  promoTypes = 'promoTypes',
  purchaseUris = 'purchaseUris',
  rarity = 'rarity',
  relatedUris = 'relatedUris',
  releasedAt = 'releasedAt',
  reprint = 'reprint',
  scryfallSetUri = 'scryfallSetUri',
  setCode = 'setCode',
  setName = 'setName',
  setSearchUri = 'setSearchUri',
  setType = 'setType',
  setUri = 'setUri',
  storySpotlight = 'storySpotlight',
  textless = 'textless',
  variation = 'variation',
  varationOf = 'varationOf',
  securityStamp = 'securityStamp',
  watermark = 'watermark',
  setId = 'setId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ScryfallCardScalarFieldEnum, {
  name: 'ScryfallCardScalarFieldEnum',
  description: undefined,
});
