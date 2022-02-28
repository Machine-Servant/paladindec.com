import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableListFilter } from '../prisma/json-nullable-list-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ScryfallSetRelationFilter } from '../scryfall-set/scryfall-set-relation-filter.input';
import { ScryfallRelatedCardListRelationFilter } from '../scryfall-related-card/scryfall-related-card-list-relation-filter.input';
import { ScryfallCardFaceListRelationFilter } from '../scryfall-card-face/scryfall-card-face-list-relation-filter.input';
import { ScryfallPriceListRelationFilter } from '../scryfall-price/scryfall-price-list-relation-filter.input';

@InputType()
export class ScryfallCardWhereInput {
  @Field(() => [ScryfallCardWhereInput], { nullable: true })
  AND?: Array<ScryfallCardWhereInput>;

  @Field(() => [ScryfallCardWhereInput], { nullable: true })
  OR?: Array<ScryfallCardWhereInput>;

  @Field(() => [ScryfallCardWhereInput], { nullable: true })
  NOT?: Array<ScryfallCardWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  arenaId?: IntNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  lang?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  mtgoId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  mtgoFoilId?: IntNullableFilter;

  @Field(() => IntNullableListFilter, { nullable: true })
  multiverseIds?: IntNullableListFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  tcgplayerId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  tcgplayerEtchedId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  cardmarketId?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  oracleId?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  printsSearchUri?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  rulingUri?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  scryfallUri?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  uri?: StringFilter;

  @Field(() => JsonNullableListFilter, { nullable: true })
  allParts?: JsonNullableListFilter;

  @Field(() => JsonNullableListFilter, { nullable: true })
  cardFacesRaw?: JsonNullableListFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  cmc?: FloatNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIdentity?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colorIndicator?: StringNullableListFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  colors?: StringNullableListFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  edhrecRank?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  handModifier?: StringNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  keywords?: StringNullableListFilter;

  @Field(() => StringFilter, { nullable: true })
  layout?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  legalities?: JsonFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  lifeModifier?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  loyalty?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  manaCost?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  oracleText?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  oversized?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  power?: StringNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  producedMana?: StringNullableListFilter;

  @Field(() => BoolFilter, { nullable: true })
  reserved?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  toughness?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  typeLine?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  artist?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  booster?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  borderColor?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  cardBackId?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  collectorNumber?: StringFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  contentWarning?: BoolNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  digital?: BoolFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  finishes?: StringNullableListFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  flavorName?: StringNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  frameEffects?: StringNullableListFilter;

  @Field(() => StringFilter, { nullable: true })
  frame?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  fullArt?: BoolFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  games?: StringNullableListFilter;

  @Field(() => BoolFilter, { nullable: true })
  highresImage?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  illustrationId?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  imageStatus?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  imageUris?: JsonNullableFilter;

  @Field(() => JsonFilter, { nullable: true })
  prices?: JsonFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedName?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedText?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  printedTypeLine?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  promo?: BoolFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  promoTypes?: StringNullableListFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  purchaseUris?: JsonNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  rarity?: StringFilter;

  @Field(() => JsonFilter, { nullable: true })
  relatedUris?: JsonFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  releasedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  reprint?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  scryfallSetUri?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  setCode?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  setName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  setSearchUri?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  setType?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  setUri?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  storySpotlight?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  textless?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  variation?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  varationOf?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  securityStamp?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  watermark?: StringNullableFilter;

  @Field(() => ScryfallSetRelationFilter, { nullable: true })
  set?: ScryfallSetRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  setId?: StringFilter;

  @Field(() => ScryfallRelatedCardListRelationFilter, { nullable: true })
  relatedTo?: ScryfallRelatedCardListRelationFilter;

  @Field(() => ScryfallRelatedCardListRelationFilter, { nullable: true })
  referencedBy?: ScryfallRelatedCardListRelationFilter;

  @Field(() => ScryfallCardFaceListRelationFilter, { nullable: true })
  cardFaces?: ScryfallCardFaceListRelationFilter;

  @Field(() => ScryfallPriceListRelationFilter, { nullable: true })
  scryfallPrice?: ScryfallPriceListRelationFilter;
}
