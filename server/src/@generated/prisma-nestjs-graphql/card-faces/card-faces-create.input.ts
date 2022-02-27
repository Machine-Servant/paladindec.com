import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutCardFacesInput } from '../card/card-create-nested-one-without-card-faces.input';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CardFacesCreatecolorIndicatorInput } from '../prisma/card-faces-createcolor-indicator.input';
import { CardFacesCreatecolorsInput } from '../prisma/card-faces-createcolors.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CardFacesCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CardCreateNestedOneWithoutCardFacesInput, { nullable: false })
  card!: CardCreateNestedOneWithoutCardFacesInput;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;

  @Field(() => CardFacesCreatecolorIndicatorInput, { nullable: true })
  colorIndicator?: CardFacesCreatecolorIndicatorInput;

  @Field(() => CardFacesCreatecolorsInput, { nullable: true })
  colors?: CardFacesCreatecolorsInput;

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
}
