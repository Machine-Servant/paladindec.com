import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Float } from '@nestjs/graphql';
import { ScryfallCardCountAggregate } from './scryfall-card-count-aggregate.output';
import { ScryfallCardAvgAggregate } from './scryfall-card-avg-aggregate.output';
import { ScryfallCardSumAggregate } from './scryfall-card-sum-aggregate.output';
import { ScryfallCardMinAggregate } from './scryfall-card-min-aggregate.output';
import { ScryfallCardMaxAggregate } from './scryfall-card-max-aggregate.output';

@ObjectType()
export class ScryfallCardGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Int, { nullable: true })
  arenaId?: number;

  @Field(() => String, { nullable: false })
  lang!: string;

  @Field(() => Int, { nullable: true })
  mtgoId?: number;

  @Field(() => Int, { nullable: true })
  mtgoFoilId?: number;

  @Field(() => [Int], { nullable: true })
  multiverseIds?: Array<number>;

  @Field(() => Int, { nullable: true })
  tcgplayerId?: number;

  @Field(() => Int, { nullable: true })
  tcgplayerEtchedId?: number;

  @Field(() => Int, { nullable: true })
  cardmarketId?: number;

  @Field(() => String, { nullable: true })
  oracleId?: string;

  @Field(() => String, { nullable: false })
  printsSearchUri!: string;

  @Field(() => String, { nullable: true })
  rulingUri?: string;

  @Field(() => String, { nullable: false })
  scryfallUri!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  allParts?: Array<any>;

  @Field(() => [GraphQLJSON], { nullable: true })
  cardFacesRaw?: Array<any>;

  @Field(() => Float, { nullable: true })
  cmc?: number;

  @Field(() => [String], { nullable: true })
  colorIdentity?: Array<string>;

  @Field(() => [String], { nullable: true })
  colorIndicator?: Array<string>;

  @Field(() => [String], { nullable: true })
  colors?: Array<string>;

  @Field(() => Int, { nullable: true })
  edhrecRank?: number;

  @Field(() => String, { nullable: true })
  handModifier?: string;

  @Field(() => [String], { nullable: true })
  keywords?: Array<string>;

  @Field(() => String, { nullable: false })
  layout!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  legalities!: any;

  @Field(() => String, { nullable: true })
  lifeModifier?: string;

  @Field(() => String, { nullable: true })
  loyalty?: string;

  @Field(() => String, { nullable: true })
  manaCost?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleText?: string;

  @Field(() => Boolean, { nullable: false })
  oversized!: boolean;

  @Field(() => String, { nullable: true })
  power?: string;

  @Field(() => [String], { nullable: true })
  producedMana?: Array<string>;

  @Field(() => Boolean, { nullable: false })
  reserved!: boolean;

  @Field(() => String, { nullable: true })
  toughness?: string;

  @Field(() => String, { nullable: true })
  typeLine?: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => Boolean, { nullable: false })
  booster!: boolean;

  @Field(() => String, { nullable: false })
  borderColor!: string;

  @Field(() => String, { nullable: true })
  cardBackId?: string;

  @Field(() => String, { nullable: false })
  collectorNumber!: string;

  @Field(() => Boolean, { nullable: true })
  contentWarning?: boolean;

  @Field(() => Boolean, { nullable: false })
  digital!: boolean;

  @Field(() => [String], { nullable: true })
  finishes?: Array<string>;

  @Field(() => String, { nullable: true })
  flavorName?: string;

  @Field(() => [String], { nullable: true })
  frameEffects?: Array<string>;

  @Field(() => String, { nullable: false })
  frame!: string;

  @Field(() => Boolean, { nullable: false })
  fullArt!: boolean;

  @Field(() => [String], { nullable: true })
  games?: Array<string>;

  @Field(() => Boolean, { nullable: false })
  highresImage!: boolean;

  @Field(() => String, { nullable: true })
  illustrationId?: string;

  @Field(() => String, { nullable: false })
  imageStatus!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => GraphQLJSON, { nullable: false })
  prices!: any;

  @Field(() => String, { nullable: true })
  printedName?: string;

  @Field(() => String, { nullable: true })
  printedText?: string;

  @Field(() => String, { nullable: true })
  printedTypeLine?: string;

  @Field(() => Boolean, { nullable: false })
  promo!: boolean;

  @Field(() => [String], { nullable: true })
  promoTypes?: Array<string>;

  @Field(() => GraphQLJSON, { nullable: true })
  purchaseUris?: any;

  @Field(() => String, { nullable: false })
  rarity!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  relatedUris!: any;

  @Field(() => Date, { nullable: false })
  releasedAt!: Date | string;

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
  varationOf?: string;

  @Field(() => String, { nullable: true })
  securityStamp?: string;

  @Field(() => String, { nullable: true })
  watermark?: string;

  @Field(() => String, { nullable: false })
  setId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => ScryfallCardCountAggregate, { nullable: true })
  _count?: ScryfallCardCountAggregate;

  @Field(() => ScryfallCardAvgAggregate, { nullable: true })
  _avg?: ScryfallCardAvgAggregate;

  @Field(() => ScryfallCardSumAggregate, { nullable: true })
  _sum?: ScryfallCardSumAggregate;

  @Field(() => ScryfallCardMinAggregate, { nullable: true })
  _min?: ScryfallCardMinAggregate;

  @Field(() => ScryfallCardMaxAggregate, { nullable: true })
  _max?: ScryfallCardMaxAggregate;
}
