import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ScryfallCardUpdatemultiverseIdsInput } from '../prisma/scryfall-card-updatemultiverse-ids.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ScryfallCardUpdateallPartsInput } from '../prisma/scryfall-card-updateall-parts.input';
import { ScryfallCardUpdatecardFacesRawInput } from '../prisma/scryfall-card-updatecard-faces-raw.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { ScryfallCardUpdatecolorIdentityInput } from '../prisma/scryfall-card-updatecolor-identity.input';
import { ScryfallCardUpdatecolorIndicatorInput } from '../prisma/scryfall-card-updatecolor-indicator.input';
import { ScryfallCardUpdatecolorsInput } from '../prisma/scryfall-card-updatecolors.input';
import { ScryfallCardUpdatekeywordsInput } from '../prisma/scryfall-card-updatekeywords.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ScryfallCardUpdateproducedManaInput } from '../prisma/scryfall-card-updateproduced-mana.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { ScryfallCardUpdatefinishesInput } from '../prisma/scryfall-card-updatefinishes.input';
import { ScryfallCardUpdateframeEffectsInput } from '../prisma/scryfall-card-updateframe-effects.input';
import { ScryfallCardUpdategamesInput } from '../prisma/scryfall-card-updategames.input';
import { ScryfallCardUpdatepromoTypesInput } from '../prisma/scryfall-card-updatepromo-types.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ScryfallRelatedCardUncheckedUpdateManyWithoutCardInput } from '../scryfall-related-card/scryfall-related-card-unchecked-update-many-without-card.input';
import { ScryfallCardFaceUncheckedUpdateManyWithoutCardInput } from '../scryfall-card-face/scryfall-card-face-unchecked-update-many-without-card.input';
import { ScryfallPriceUncheckedUpdateManyWithoutCardInput } from '../scryfall-price/scryfall-price-unchecked-update-many-without-card.input';

@InputType()
export class ScryfallCardUncheckedUpdateWithoutReferencedByInput {
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

  @Field(() => ScryfallCardUpdatemultiverseIdsInput, { nullable: true })
  multiverseIds?: ScryfallCardUpdatemultiverseIdsInput;

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

  @Field(() => ScryfallCardUpdateallPartsInput, { nullable: true })
  allParts?: ScryfallCardUpdateallPartsInput;

  @Field(() => ScryfallCardUpdatecardFacesRawInput, { nullable: true })
  cardFacesRaw?: ScryfallCardUpdatecardFacesRawInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  cmc?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdatecolorIdentityInput, { nullable: true })
  colorIdentity?: ScryfallCardUpdatecolorIdentityInput;

  @Field(() => ScryfallCardUpdatecolorIndicatorInput, { nullable: true })
  colorIndicator?: ScryfallCardUpdatecolorIndicatorInput;

  @Field(() => ScryfallCardUpdatecolorsInput, { nullable: true })
  colors?: ScryfallCardUpdatecolorsInput;

  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  edhrecRank?: NullableIntFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  handModifier?: NullableStringFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdatekeywordsInput, { nullable: true })
  keywords?: ScryfallCardUpdatekeywordsInput;

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

  @Field(() => ScryfallCardUpdateproducedManaInput, { nullable: true })
  producedMana?: ScryfallCardUpdateproducedManaInput;

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

  @Field(() => ScryfallCardUpdatefinishesInput, { nullable: true })
  finishes?: ScryfallCardUpdatefinishesInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  flavorName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdateframeEffectsInput, { nullable: true })
  frameEffects?: ScryfallCardUpdateframeEffectsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  frame?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  fullArt?: BoolFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdategamesInput, { nullable: true })
  games?: ScryfallCardUpdategamesInput;

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

  @Field(() => ScryfallCardUpdatepromoTypesInput, { nullable: true })
  promoTypes?: ScryfallCardUpdatepromoTypesInput;

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

  @Field(() => ScryfallRelatedCardUncheckedUpdateManyWithoutCardInput, {
    nullable: true,
  })
  relatedTo?: ScryfallRelatedCardUncheckedUpdateManyWithoutCardInput;

  @Field(() => ScryfallCardFaceUncheckedUpdateManyWithoutCardInput, {
    nullable: true,
  })
  cardFaces?: ScryfallCardFaceUncheckedUpdateManyWithoutCardInput;

  @Field(() => ScryfallPriceUncheckedUpdateManyWithoutCardInput, {
    nullable: true,
  })
  scryfallPrice?: ScryfallPriceUncheckedUpdateManyWithoutCardInput;
}
