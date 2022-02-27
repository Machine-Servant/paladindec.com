import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { CardFaceUpdatecolorIndicatorInput } from '../prisma/card-face-updatecolor-indicator.input';
import { CardFaceUpdatecolorsInput } from '../prisma/card-face-updatecolors.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CardFaceUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  cardId?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  artist?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDecimalFieldUpdateOperationsInput, { nullable: true })
  cmc?: NullableDecimalFieldUpdateOperationsInput;

  @Field(() => CardFaceUpdatecolorIndicatorInput, { nullable: true })
  colorIndicator?: CardFaceUpdatecolorIndicatorInput;

  @Field(() => CardFaceUpdatecolorsInput, { nullable: true })
  colors?: CardFaceUpdatecolorsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  flavorText?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  illustrationId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  layout?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  loyalty?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  manaCost?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  oracleId?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  oracleText?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  power?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedName?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedText?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  printedTypeLine?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  toughness?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  typeLine?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  watermark?: NullableStringFieldUpdateOperationsInput;
}
