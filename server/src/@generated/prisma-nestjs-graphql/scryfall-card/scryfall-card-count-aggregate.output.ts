import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  arenaId!: number;

  @Field(() => Int, { nullable: false })
  lang!: number;

  @Field(() => Int, { nullable: false })
  mtgoId!: number;

  @Field(() => Int, { nullable: false })
  mtgoFoilId!: number;

  @Field(() => Int, { nullable: false })
  multiverseIds!: number;

  @Field(() => Int, { nullable: false })
  tcgplayerId!: number;

  @Field(() => Int, { nullable: false })
  tcgplayerEtchedId!: number;

  @Field(() => Int, { nullable: false })
  cardmarketId!: number;

  @Field(() => Int, { nullable: false })
  oracleId!: number;

  @Field(() => Int, { nullable: false })
  printsSearchUri!: number;

  @Field(() => Int, { nullable: false })
  rulingUri!: number;

  @Field(() => Int, { nullable: false })
  scryfallUri!: number;

  @Field(() => Int, { nullable: false })
  uri!: number;

  @Field(() => Int, { nullable: false })
  allParts!: number;

  @Field(() => Int, { nullable: false })
  cardFacesRaw!: number;

  @Field(() => Int, { nullable: false })
  cmc!: number;

  @Field(() => Int, { nullable: false })
  colorIdentity!: number;

  @Field(() => Int, { nullable: false })
  colorIndicator!: number;

  @Field(() => Int, { nullable: false })
  colors!: number;

  @Field(() => Int, { nullable: false })
  edhrecRank!: number;

  @Field(() => Int, { nullable: false })
  handModifier!: number;

  @Field(() => Int, { nullable: false })
  keywords!: number;

  @Field(() => Int, { nullable: false })
  layout!: number;

  @Field(() => Int, { nullable: false })
  legalities!: number;

  @Field(() => Int, { nullable: false })
  lifeModifier!: number;

  @Field(() => Int, { nullable: false })
  loyalty!: number;

  @Field(() => Int, { nullable: false })
  manaCost!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  oracleText!: number;

  @Field(() => Int, { nullable: false })
  oversized!: number;

  @Field(() => Int, { nullable: false })
  power!: number;

  @Field(() => Int, { nullable: false })
  producedMana!: number;

  @Field(() => Int, { nullable: false })
  reserved!: number;

  @Field(() => Int, { nullable: false })
  toughness!: number;

  @Field(() => Int, { nullable: false })
  typeLine!: number;

  @Field(() => Int, { nullable: false })
  artist!: number;

  @Field(() => Int, { nullable: false })
  booster!: number;

  @Field(() => Int, { nullable: false })
  borderColor!: number;

  @Field(() => Int, { nullable: false })
  cardBackId!: number;

  @Field(() => Int, { nullable: false })
  collectorNumber!: number;

  @Field(() => Int, { nullable: false })
  contentWarning!: number;

  @Field(() => Int, { nullable: false })
  digital!: number;

  @Field(() => Int, { nullable: false })
  finishes!: number;

  @Field(() => Int, { nullable: false })
  flavorName!: number;

  @Field(() => Int, { nullable: false })
  frameEffects!: number;

  @Field(() => Int, { nullable: false })
  frame!: number;

  @Field(() => Int, { nullable: false })
  fullArt!: number;

  @Field(() => Int, { nullable: false })
  games!: number;

  @Field(() => Int, { nullable: false })
  highresImage!: number;

  @Field(() => Int, { nullable: false })
  illustrationId!: number;

  @Field(() => Int, { nullable: false })
  imageStatus!: number;

  @Field(() => Int, { nullable: false })
  imageUris!: number;

  @Field(() => Int, { nullable: false })
  prices!: number;

  @Field(() => Int, { nullable: false })
  printedName!: number;

  @Field(() => Int, { nullable: false })
  printedText!: number;

  @Field(() => Int, { nullable: false })
  printedTypeLine!: number;

  @Field(() => Int, { nullable: false })
  promo!: number;

  @Field(() => Int, { nullable: false })
  promoTypes!: number;

  @Field(() => Int, { nullable: false })
  purchaseUris!: number;

  @Field(() => Int, { nullable: false })
  rarity!: number;

  @Field(() => Int, { nullable: false })
  relatedUris!: number;

  @Field(() => Int, { nullable: false })
  releasedAt!: number;

  @Field(() => Int, { nullable: false })
  reprint!: number;

  @Field(() => Int, { nullable: false })
  scryfallSetUri!: number;

  @Field(() => Int, { nullable: false })
  setCode!: number;

  @Field(() => Int, { nullable: false })
  setName!: number;

  @Field(() => Int, { nullable: false })
  setSearchUri!: number;

  @Field(() => Int, { nullable: false })
  setType!: number;

  @Field(() => Int, { nullable: false })
  setUri!: number;

  @Field(() => Int, { nullable: false })
  storySpotlight!: number;

  @Field(() => Int, { nullable: false })
  textless!: number;

  @Field(() => Int, { nullable: false })
  variation!: number;

  @Field(() => Int, { nullable: false })
  varationOf!: number;

  @Field(() => Int, { nullable: false })
  securityStamp!: number;

  @Field(() => Int, { nullable: false })
  watermark!: number;

  @Field(() => Int, { nullable: false })
  setId!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
