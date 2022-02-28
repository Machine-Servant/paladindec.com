import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallCardMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  arenaId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lang?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  mtgoId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  mtgoFoilId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tcgplayerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tcgplayerEtchedId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardmarketId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printsSearchUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rulingUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cmc?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  edhrecRank?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  handModifier?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lifeModifier?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  loyalty?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  manaCost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oversized?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  power?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  reserved?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  toughness?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  typeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  artist?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  booster?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  borderColor?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardBackId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectorNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  contentWarning?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  digital?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  flavorName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  frame?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  fullArt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  highresImage?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  illustrationId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  imageStatus?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedTypeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  promo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  releasedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  reprint?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallSetUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setSearchUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setType?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  storySpotlight?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  textless?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  variation?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  varationOf?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  securityStamp?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  watermark?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setId?: keyof typeof SortOrder;
}
