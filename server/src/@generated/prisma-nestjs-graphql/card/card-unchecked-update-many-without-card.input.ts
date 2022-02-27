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

@InputType()
export class CardUncheckedUpdateManyWithoutCardInput {
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
}
