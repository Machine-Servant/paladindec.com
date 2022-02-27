import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class CardMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  arenaId?: number;

  @Field(() => String, { nullable: true })
  lang?: string;

  @Field(() => Int, { nullable: true })
  mtgoId?: number;

  @Field(() => Int, { nullable: true })
  mtgoFoilId?: number;

  @Field(() => Int, { nullable: true })
  tcgplayerId?: number;

  @Field(() => Int, { nullable: true })
  tcgplayerEtchedId?: number;

  @Field(() => Int, { nullable: true })
  cardmarketId?: number;

  @Field(() => String, { nullable: true })
  oracleId?: string;

  @Field(() => String, { nullable: true })
  printsSearchUri?: string;

  @Field(() => String, { nullable: true })
  rulingUri?: string;

  @Field(() => String, { nullable: true })
  scryfallUri?: string;

  @Field(() => String, { nullable: true })
  uri?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;

  @Field(() => Int, { nullable: true })
  edhrecRank?: number;

  @Field(() => String, { nullable: true })
  handModifier?: string;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => String, { nullable: true })
  lifeModifier?: string;

  @Field(() => String, { nullable: true })
  loyalty?: string;

  @Field(() => String, { nullable: true })
  manaCost?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  oracleText?: string;

  @Field(() => Boolean, { nullable: true })
  oversized?: boolean;

  @Field(() => String, { nullable: true })
  power?: string;

  @Field(() => Boolean, { nullable: true })
  reserved?: boolean;

  @Field(() => String, { nullable: true })
  toughness?: string;

  @Field(() => String, { nullable: true })
  typeLine?: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => Boolean, { nullable: true })
  booster?: boolean;

  @Field(() => String, { nullable: true })
  borderColor?: string;

  @Field(() => String, { nullable: true })
  cardBackId?: string;

  @Field(() => String, { nullable: true })
  collectorNumber?: string;

  @Field(() => Boolean, { nullable: true })
  contentWarning?: boolean;

  @Field(() => Boolean, { nullable: true })
  digital?: boolean;

  @Field(() => String, { nullable: true })
  flavorName?: string;

  @Field(() => String, { nullable: true })
  frame?: string;

  @Field(() => Boolean, { nullable: true })
  fullArt?: boolean;

  @Field(() => Boolean, { nullable: true })
  highresImage?: boolean;

  @Field(() => String, { nullable: true })
  illustrationId?: string;

  @Field(() => String, { nullable: true })
  imageStatus?: string;

  @Field(() => String, { nullable: true })
  printedName?: string;

  @Field(() => String, { nullable: true })
  printedText?: string;

  @Field(() => String, { nullable: true })
  printedTypeLine?: string;

  @Field(() => Boolean, { nullable: true })
  promo?: boolean;

  @Field(() => String, { nullable: true })
  rarity?: string;

  @Field(() => Date, { nullable: true })
  releasedAt?: Date | string;

  @Field(() => Boolean, { nullable: true })
  reprint?: boolean;

  @Field(() => String, { nullable: true })
  scryfallSetUri?: string;

  @Field(() => String, { nullable: true })
  setCode?: string;

  @Field(() => String, { nullable: true })
  setName?: string;

  @Field(() => String, { nullable: true })
  setSearchUri?: string;

  @Field(() => String, { nullable: true })
  setType?: string;

  @Field(() => String, { nullable: true })
  setUri?: string;

  @Field(() => Boolean, { nullable: true })
  storySpotlight?: boolean;

  @Field(() => Boolean, { nullable: true })
  textless?: boolean;

  @Field(() => Boolean, { nullable: true })
  variation?: boolean;

  @Field(() => String, { nullable: true })
  varationOf?: string;

  @Field(() => String, { nullable: true })
  securityStamp?: string;

  @Field(() => String, { nullable: true })
  watermark?: string;

  @Field(() => String, { nullable: true })
  setId?: string;
}
