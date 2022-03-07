import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableListFilter } from '../prisma/json-nullable-list-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ScryfallCardScalarWhereWithAggregatesInput {
  @Field(() => [ScryfallCardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ScryfallCardScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ScryfallCardScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ScryfallCardScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  arenaId?: IntNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  lang?: StringWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  mtgoId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  mtgoFoilId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableListFilter, { nullable: true })
  multiverseIds?: IntNullableListFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  tcgplayerId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  tcgplayerEtchedId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  cardmarketId?: IntNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  oracleId?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  printsSearchUri?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  rulingUri?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scryfallUri?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  uri?: StringWithAggregatesFilter;

  @Field(() => JsonNullableListFilter, { nullable: true })
  allParts?: JsonNullableListFilter;

  @Field(() => JsonNullableListFilter, { nullable: true })
  cardFacesRaw?: JsonNullableListFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  cmc?: FloatNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIdentity?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIndicator?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colors?: StringNullableListFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  edhrecRank?: IntNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  handModifier?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  keywords?: StringNullableListFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  layout?: StringWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  legalities?: JsonWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  lifeModifier?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  loyalty?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  manaCost?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  oracleText?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  oversized?: BoolWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  power?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  producedMana?: StringNullableListFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  reserved?: BoolWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  toughness?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  typeLine?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  artist?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  booster?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  borderColor?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  cardBackId?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  collectorNumber?: StringWithAggregatesFilter;

  @Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  contentWarning?: BoolNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  digital?: BoolWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  finishes?: StringNullableListFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  flavorName?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  frameEffects?: StringNullableListFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  frame?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  fullArt?: BoolWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  games?: StringNullableListFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  highresImage?: BoolWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  illustrationId?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  imageStatus?: StringWithAggregatesFilter;

  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  imageUris?: JsonNullableWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  prices?: JsonWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedName?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedText?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  printedTypeLine?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  promo?: BoolWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  promoTypes?: StringNullableListFilter;

  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  purchaseUris?: JsonNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  rarity?: StringWithAggregatesFilter;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  relatedUris?: JsonWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  releasedAt?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  reprint?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scryfallSetUri?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setCode?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setSearchUri?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setType?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setUri?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  storySpotlight?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  textless?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  variation?: BoolWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  varationOf?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  securityStamp?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  watermark?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  setId?: StringWithAggregatesFilter;
}
