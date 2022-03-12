import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ScryfallCardFaceCreatecolorIndicatorInput } from '../prisma/scryfall-card-face-createcolor-indicator.input';
import { ScryfallCardFaceCreatecolorsInput } from '../prisma/scryfall-card-face-createcolors.input';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardFaceCreateWithoutCardInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => Float, { nullable: true })
  cmc?: number;

  @Field(() => ScryfallCardFaceCreatecolorIndicatorInput, { nullable: true })
  colorIndicator?: ScryfallCardFaceCreatecolorIndicatorInput;

  @Field(() => ScryfallCardFaceCreatecolorsInput, { nullable: true })
  colors?: ScryfallCardFaceCreatecolorsInput;

  @Field(() => String, { nullable: true })
  flavorText?: string;

  @Field(() => String, { nullable: true })
  illustrationId?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => String, { nullable: true })
  loyalty?: string;

  @Field(() => String, { nullable: true })
  manaCost?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleId?: string;

  @Field(() => String, { nullable: true })
  oracleText?: string;

  @Field(() => String, { nullable: true })
  power?: string;

  @Field(() => String, { nullable: true })
  printedName?: string;

  @Field(() => String, { nullable: true })
  printedText?: string;

  @Field(() => String, { nullable: true })
  printedTypeLine?: string;

  @Field(() => String, { nullable: true })
  toughness?: string;

  @Field(() => String, { nullable: true })
  typeLine?: string;

  @Field(() => String, { nullable: true })
  watermark?: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
