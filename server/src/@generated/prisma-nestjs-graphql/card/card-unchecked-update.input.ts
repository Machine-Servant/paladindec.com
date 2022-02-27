import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { CardUpdatemultiverseIdsInput } from '../prisma/card-updatemultiverse-ids.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CardUpdateallPartsInput } from '../prisma/card-updateall-parts.input';
import { CardUpdatecardFacesRawInput } from '../prisma/card-updatecard-faces-raw.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { CardUpdatecolorIdentityInput } from '../prisma/card-updatecolor-identity.input';
import { CardUpdatecolorIndicatorInput } from '../prisma/card-updatecolor-indicator.input';
import { CardUpdatecolorsInput } from '../prisma/card-updatecolors.input';
import { CardUpdatekeywordsInput } from '../prisma/card-updatekeywords.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CardUpdateproducedManaInput } from '../prisma/card-updateproduced-mana.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CardUpdatefinishesInput } from '../prisma/card-updatefinishes.input';
import { CardUpdateframeEffectsInput } from '../prisma/card-updateframe-effects.input';
import { CardUpdategamesInput } from '../prisma/card-updategames.input';
import { CardUpdatepromoTypesInput } from '../prisma/card-updatepromo-types.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RelatedCardUncheckedUpdateManyWithoutCardInput } from '../related-card/related-card-unchecked-update-many-without-card.input';
import { RelatedCardUncheckedUpdateManyWithoutReferenceInput } from '../related-card/related-card-unchecked-update-many-without-reference.input';
import { CardFaceUncheckedUpdateManyWithoutCardInput } from '../card-face/card-face-unchecked-update-many-without-card.input';

@InputType()
export class CardUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  arenaId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lang?: StringFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  mtgoId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  mtgoFoilId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => CardUpdatemultiverseIdsInput, { nullable: true })
  multiverseIds?: CardUpdatemultiverseIdsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  tcgplayerId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  tcgplayerEtchedId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  cardmarketId?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  oracleId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  printsSearchUri?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  rulingUri?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scryfallUri?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uri?: StringFieldUpdateOperationsInput;

  @Field(() => CardUpdateallPartsInput, { nullable: true })
  allParts?: CardUpdateallPartsInput;

  @Field(() => CardUpdatecardFacesRawInput, { nullable: true })
  cardFacesRaw?: CardUpdatecardFacesRawInput;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  cmc?: NullableDecimalFieldUpdateOperationsInput;

  @Field(() => CardUpdatecolorIdentityInput, { nullable: true })
  colorIdentity?: CardUpdatecolorIdentityInput;

  @Field(() => CardUpdatecolorIndicatorInput, { nullable: true })
  colorIndicator?: CardUpdatecolorIndicatorInput;

  @Field(() => CardUpdatecolorsInput, { nullable: true })
  colors?: CardUpdatecolorsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  edhrecRank?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  handModifier?: NullableStringFieldUpdateOperationsInput;

  @Field(() => CardUpdatekeywordsInput, { nullable: true })
  keywords?: CardUpdatekeywordsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  layout?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  legalities?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  lifeModifier?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  loyalty?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  manaCost?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  oracleText?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  oversized?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  power?: NullableStringFieldUpdateOperationsInput;

  @Field(() => CardUpdateproducedManaInput, { nullable: true })
  producedMana?: CardUpdateproducedManaInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  reserved?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  toughness?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  typeLine?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  artist?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  booster?: BoolFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  borderColor?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  cardBackId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  collectorNumber?: StringFieldUpdateOperationsInput;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  contentWarning?: NullableBoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  digital?: BoolFieldUpdateOperationsInput;

  @Field(() => CardUpdatefinishesInput, { nullable: true })
  finishes?: CardUpdatefinishesInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  flavorName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => CardUpdateframeEffectsInput, { nullable: true })
  frameEffects?: CardUpdateframeEffectsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  frame?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  fullArt?: BoolFieldUpdateOperationsInput;

  @Field(() => CardUpdategamesInput, { nullable: true })
  games?: CardUpdategamesInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  highresImage?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  illustrationId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  imageStatus?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  prices?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedText?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedTypeLine?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  promo?: BoolFieldUpdateOperationsInput;

  @Field(() => CardUpdatepromoTypesInput, { nullable: true })
  promoTypes?: CardUpdatepromoTypesInput;

  @Field(() => GraphQLJSON, { nullable: true })
  purchaseUris?: any;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  rarity?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  relatedUris?: any;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  releasedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  reprint?: BoolFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scryfallSetUri?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setCode?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setName?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setSearchUri?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setType?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setUri?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  storySpotlight?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  textless?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  variation?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  varationOf?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  securityStamp?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  watermark?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  setId?: StringFieldUpdateOperationsInput;

  @Field(() => RelatedCardUncheckedUpdateManyWithoutCardInput, {
    nullable: true,
  })
  relatedTo?: RelatedCardUncheckedUpdateManyWithoutCardInput;

  @Field(() => RelatedCardUncheckedUpdateManyWithoutReferenceInput, {
    nullable: true,
  })
  referencedBy?: RelatedCardUncheckedUpdateManyWithoutReferenceInput;

  @Field(() => CardFaceUncheckedUpdateManyWithoutCardInput, { nullable: true })
  cardFaces?: CardFaceUncheckedUpdateManyWithoutCardInput;
}
