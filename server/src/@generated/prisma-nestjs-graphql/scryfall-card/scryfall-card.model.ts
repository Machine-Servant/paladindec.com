import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { ScryfallSet } from '../scryfall-set/scryfall-set.model';
import { Card } from '../card/card.model';
import { ScryfallCardFace } from '../scryfall-card-face/scryfall-card-face.model';
import { ScryfallPrice } from '../scryfall-price/scryfall-price.model';
import { ScryfallRelatedCard } from '../scryfall-related-card/scryfall-related-card.model';
import { ScryfallCardCount } from './scryfall-card-count.output';

@ObjectType()
export class ScryfallCard {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Int, { nullable: true })
  arenaId!: number | null;

  @Field(() => String, { nullable: false })
  lang!: string;

  @Field(() => Int, { nullable: true })
  mtgoId!: number | null;

  @Field(() => Int, { nullable: true })
  mtgoFoilId!: number | null;

  @Field(() => [Int], { nullable: true })
  multiverseIds!: Array<number>;

  @Field(() => Int, { nullable: true })
  tcgplayerId!: number | null;

  @Field(() => Int, { nullable: true })
  tcgplayerEtchedId!: number | null;

  @Field(() => Int, { nullable: true })
  cardmarketId!: number | null;

  @Field(() => String, { nullable: true })
  oracleId!: string | null;

  @Field(() => String, { nullable: false })
  printsSearchUri!: string;

  @Field(() => String, { nullable: true })
  rulingUri!: string | null;

  @Field(() => String, { nullable: false })
  scryfallUri!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  allParts!: Array<any>;

  @Field(() => [GraphQLJSON], { nullable: true })
  cardFacesRaw!: Array<any>;

  @Field(() => Float, { nullable: true })
  cmc!: number | null;

  @Field(() => [String], { nullable: true })
  colorIdentity!: Array<string>;

  @Field(() => [String], { nullable: true })
  colorIndicator!: Array<string>;

  @Field(() => [String], { nullable: true })
  colors!: Array<string>;

  @Field(() => Int, { nullable: true })
  edhrecRank!: number | null;

  @Field(() => String, { nullable: true })
  handModifier!: string | null;

  @Field(() => [String], { nullable: true })
  keywords!: Array<string>;

  @Field(() => String, { nullable: false })
  layout!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  legalities!: any;

  @Field(() => String, { nullable: true })
  lifeModifier!: string | null;

  @Field(() => String, { nullable: true })
  loyalty!: string | null;

  @Field(() => String, { nullable: true })
  manaCost!: string | null;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleText!: string | null;

  @Field(() => Boolean, { nullable: false })
  oversized!: boolean;

  @Field(() => String, { nullable: true })
  power!: string | null;

  @Field(() => [String], { nullable: true })
  producedMana!: Array<string>;

  @Field(() => Boolean, { nullable: false })
  reserved!: boolean;

  @Field(() => String, { nullable: true })
  toughness!: string | null;

  @Field(() => String, { nullable: true })
  typeLine!: string | null;

  @Field(() => String, { nullable: true })
  artist!: string | null;

  @Field(() => Boolean, { nullable: false })
  booster!: boolean;

  @Field(() => String, { nullable: false })
  borderColor!: string;

  @Field(() => String, { nullable: true })
  cardBackId!: string | null;

  @Field(() => String, { nullable: false })
  collectorNumber!: string;

  @Field(() => Boolean, { nullable: true })
  contentWarning!: boolean | null;

  @Field(() => Boolean, { nullable: false })
  digital!: boolean;

  @Field(() => [String], { nullable: true })
  finishes!: Array<string>;

  @Field(() => String, { nullable: true })
  flavorName!: string | null;

  @Field(() => [String], { nullable: true })
  frameEffects!: Array<string>;

  @Field(() => String, { nullable: false })
  frame!: string;

  @Field(() => Boolean, { nullable: false })
  fullArt!: boolean;

  @Field(() => [String], { nullable: true })
  games!: Array<string>;

  @Field(() => Boolean, { nullable: false })
  highresImage!: boolean;

  @Field(() => String, { nullable: true })
  illustrationId!: string | null;

  @Field(() => String, { nullable: false })
  imageStatus!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris!: any | null;

  @Field(() => GraphQLJSON, { nullable: false })
  prices!: any;

  @Field(() => String, { nullable: true })
  printedName!: string | null;

  @Field(() => String, { nullable: true })
  printedText!: string | null;

  @Field(() => String, { nullable: true })
  printedTypeLine!: string | null;

  @Field(() => Boolean, { nullable: false })
  promo!: boolean;

  @Field(() => [String], { nullable: true })
  promoTypes!: Array<string>;

  @Field(() => GraphQLJSON, { nullable: true })
  purchaseUris!: any | null;

  @Field(() => String, { nullable: false })
  rarity!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  relatedUris!: any;

  @Field(() => Date, { nullable: false })
  releasedAt!: Date;

  @Field(() => Boolean, { nullable: false })
  reprint!: boolean;

  @Field(() => String, { nullable: false })
  scryfallSetUri!: string;

  @Field(() => String, { nullable: false })
  setCode!: string;

  @Field(() => String, { nullable: false })
  setName!: string;

  @Field(() => String, { nullable: false })
  setSearchUri!: string;

  @Field(() => String, { nullable: false })
  setType!: string;

  @Field(() => String, { nullable: false })
  setUri!: string;

  @Field(() => Boolean, { nullable: false })
  storySpotlight!: boolean;

  @Field(() => Boolean, { nullable: false })
  textless!: boolean;

  @Field(() => Boolean, { nullable: false })
  variation!: boolean;

  @Field(() => String, { nullable: true })
  varationOf!: string | null;

  @Field(() => String, { nullable: true })
  securityStamp!: string | null;

  @Field(() => String, { nullable: true })
  watermark!: string | null;

  @Field(() => String, { nullable: false })
  setId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => ScryfallSet, { nullable: false })
  set?: ScryfallSet;

  @Field(() => Card, { nullable: true })
  card?: Card | null;

  @Field(() => [ScryfallCardFace], { nullable: true })
  cardFaces?: Array<ScryfallCardFace>;

  @Field(() => [ScryfallPrice], { nullable: true })
  scryfallPrice?: Array<ScryfallPrice>;

  @Field(() => [ScryfallRelatedCard], { nullable: true })
  relatedTo?: Array<ScryfallRelatedCard>;

  @Field(() => [ScryfallRelatedCard], { nullable: true })
  referencedBy?: Array<ScryfallRelatedCard>;

  @Field(() => ScryfallCardCount, { nullable: false })
  _count?: ScryfallCardCount;
}
