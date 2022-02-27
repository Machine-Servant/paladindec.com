import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  arenaId?: true;

  @Field(() => Boolean, { nullable: true })
  lang?: true;

  @Field(() => Boolean, { nullable: true })
  mtgoId?: true;

  @Field(() => Boolean, { nullable: true })
  mtgoFoilId?: true;

  @Field(() => Boolean, { nullable: true })
  multiverseIds?: true;

  @Field(() => Boolean, { nullable: true })
  tcgplayerId?: true;

  @Field(() => Boolean, { nullable: true })
  tcgplayerEtchedId?: true;

  @Field(() => Boolean, { nullable: true })
  cardmarketId?: true;

  @Field(() => Boolean, { nullable: true })
  oracleId?: true;

  @Field(() => Boolean, { nullable: true })
  printsSearchUri?: true;

  @Field(() => Boolean, { nullable: true })
  rulingUri?: true;

  @Field(() => Boolean, { nullable: true })
  scryfallUri?: true;

  @Field(() => Boolean, { nullable: true })
  uri?: true;

  @Field(() => Boolean, { nullable: true })
  allParts?: true;

  @Field(() => Boolean, { nullable: true })
  cardFacesRaw?: true;

  @Field(() => Boolean, { nullable: true })
  cmc?: true;

  @Field(() => Boolean, { nullable: true })
  colorIdentity?: true;

  @Field(() => Boolean, { nullable: true })
  colorIndicator?: true;

  @Field(() => Boolean, { nullable: true })
  colors?: true;

  @Field(() => Boolean, { nullable: true })
  edhrecRank?: true;

  @Field(() => Boolean, { nullable: true })
  handModifier?: true;

  @Field(() => Boolean, { nullable: true })
  keywords?: true;

  @Field(() => Boolean, { nullable: true })
  layout?: true;

  @Field(() => Boolean, { nullable: true })
  legalities?: true;

  @Field(() => Boolean, { nullable: true })
  lifeModifier?: true;

  @Field(() => Boolean, { nullable: true })
  loyalty?: true;

  @Field(() => Boolean, { nullable: true })
  manaCost?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  oracleText?: true;

  @Field(() => Boolean, { nullable: true })
  oversized?: true;

  @Field(() => Boolean, { nullable: true })
  power?: true;

  @Field(() => Boolean, { nullable: true })
  producedMana?: true;

  @Field(() => Boolean, { nullable: true })
  reserved?: true;

  @Field(() => Boolean, { nullable: true })
  toughness?: true;

  @Field(() => Boolean, { nullable: true })
  typeLine?: true;

  @Field(() => Boolean, { nullable: true })
  artist?: true;

  @Field(() => Boolean, { nullable: true })
  booster?: true;

  @Field(() => Boolean, { nullable: true })
  borderColor?: true;

  @Field(() => Boolean, { nullable: true })
  cardBackId?: true;

  @Field(() => Boolean, { nullable: true })
  collectorNumber?: true;

  @Field(() => Boolean, { nullable: true })
  contentWarning?: true;

  @Field(() => Boolean, { nullable: true })
  digital?: true;

  @Field(() => Boolean, { nullable: true })
  finishes?: true;

  @Field(() => Boolean, { nullable: true })
  flavorName?: true;

  @Field(() => Boolean, { nullable: true })
  frameEffects?: true;

  @Field(() => Boolean, { nullable: true })
  frame?: true;

  @Field(() => Boolean, { nullable: true })
  fullArt?: true;

  @Field(() => Boolean, { nullable: true })
  games?: true;

  @Field(() => Boolean, { nullable: true })
  highresImage?: true;

  @Field(() => Boolean, { nullable: true })
  illustrationId?: true;

  @Field(() => Boolean, { nullable: true })
  imageStatus?: true;

  @Field(() => Boolean, { nullable: true })
  imageUris?: true;

  @Field(() => Boolean, { nullable: true })
  prices?: true;

  @Field(() => Boolean, { nullable: true })
  printedName?: true;

  @Field(() => Boolean, { nullable: true })
  printedText?: true;

  @Field(() => Boolean, { nullable: true })
  printedTypeLine?: true;

  @Field(() => Boolean, { nullable: true })
  promo?: true;

  @Field(() => Boolean, { nullable: true })
  promoTypes?: true;

  @Field(() => Boolean, { nullable: true })
  purchaseUris?: true;

  @Field(() => Boolean, { nullable: true })
  rarity?: true;

  @Field(() => Boolean, { nullable: true })
  relatedUris?: true;

  @Field(() => Boolean, { nullable: true })
  releasedAt?: true;

  @Field(() => Boolean, { nullable: true })
  reprint?: true;

  @Field(() => Boolean, { nullable: true })
  scryfallSetUri?: true;

  @Field(() => Boolean, { nullable: true })
  setCode?: true;

  @Field(() => Boolean, { nullable: true })
  setName?: true;

  @Field(() => Boolean, { nullable: true })
  setSearchUri?: true;

  @Field(() => Boolean, { nullable: true })
  setType?: true;

  @Field(() => Boolean, { nullable: true })
  setUri?: true;

  @Field(() => Boolean, { nullable: true })
  storySpotlight?: true;

  @Field(() => Boolean, { nullable: true })
  textless?: true;

  @Field(() => Boolean, { nullable: true })
  variation?: true;

  @Field(() => Boolean, { nullable: true })
  varationOf?: true;

  @Field(() => Boolean, { nullable: true })
  securityStamp?: true;

  @Field(() => Boolean, { nullable: true })
  watermark?: true;

  @Field(() => Boolean, { nullable: true })
  setId?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
