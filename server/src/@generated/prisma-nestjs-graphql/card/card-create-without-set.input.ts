import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CardCreatemultiverseIdsInput } from '../prisma/card-createmultiverse-ids.input';
import { CardCreateallPartsInput } from '../prisma/card-createall-parts.input';
import { CardCreatecardFacesRawInput } from '../prisma/card-createcard-faces-raw.input';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CardCreatecolorIdentityInput } from '../prisma/card-createcolor-identity.input';
import { CardCreatecolorIndicatorInput } from '../prisma/card-createcolor-indicator.input';
import { CardCreatecolorsInput } from '../prisma/card-createcolors.input';
import { CardCreatekeywordsInput } from '../prisma/card-createkeywords.input';
import { GraphQLJSON } from 'graphql-type-json';
import { CardCreateproducedManaInput } from '../prisma/card-createproduced-mana.input';
import { CardCreatefinishesInput } from '../prisma/card-createfinishes.input';
import { CardCreateframeEffectsInput } from '../prisma/card-createframe-effects.input';
import { CardCreategamesInput } from '../prisma/card-creategames.input';
import { CardCreatepromoTypesInput } from '../prisma/card-createpromo-types.input';
import { RelatedCardCreateNestedManyWithoutCardInput } from '../related-card/related-card-create-nested-many-without-card.input';
import { RelatedCardCreateNestedManyWithoutReferenceInput } from '../related-card/related-card-create-nested-many-without-reference.input';
import { CardFaceCreateNestedManyWithoutCardInput } from '../card-face/card-face-create-nested-many-without-card.input';

@InputType()
export class CardCreateWithoutSetInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  arenaId?: number;

  @Field(() => String, { nullable: false })
  lang!: string;

  @Field(() => Int, { nullable: true })
  mtgoId?: number;

  @Field(() => Int, { nullable: true })
  mtgoFoilId?: number;

  @Field(() => CardCreatemultiverseIdsInput, { nullable: true })
  multiverseIds?: CardCreatemultiverseIdsInput;

  @Field(() => Int, { nullable: true })
  tcgplayerId?: number;

  @Field(() => Int, { nullable: true })
  tcgplayerEtchedId?: number;

  @Field(() => Int, { nullable: true })
  cardmarketId?: number;

  @Field(() => String, { nullable: true })
  oracleId?: string;

  @Field(() => String, { nullable: false })
  printsSearchUri!: string;

  @Field(() => String, { nullable: true })
  rulingUri?: string;

  @Field(() => String, { nullable: false })
  scryfallUri!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @Field(() => CardCreateallPartsInput, { nullable: true })
  allParts?: CardCreateallPartsInput;

  @Field(() => CardCreatecardFacesRawInput, { nullable: true })
  cardFacesRaw?: CardCreatecardFacesRawInput;

  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;

  @Field(() => CardCreatecolorIdentityInput, { nullable: true })
  colorIdentity?: CardCreatecolorIdentityInput;

  @Field(() => CardCreatecolorIndicatorInput, { nullable: true })
  colorIndicator?: CardCreatecolorIndicatorInput;

  @Field(() => CardCreatecolorsInput, { nullable: true })
  colors?: CardCreatecolorsInput;

  @Field(() => Int, { nullable: true })
  edhrecRank?: number;

  @Field(() => String, { nullable: true })
  handModifier?: string;

  @Field(() => CardCreatekeywordsInput, { nullable: true })
  keywords?: CardCreatekeywordsInput;

  @Field(() => String, { nullable: false })
  layout!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  legalities!: any;

  @Field(() => String, { nullable: true })
  lifeModifier?: string;

  @Field(() => String, { nullable: true })
  loyalty?: string;

  @Field(() => String, { nullable: true })
  manaCost?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  oracleText?: string;

  @Field(() => Boolean, { nullable: false })
  oversized!: boolean;

  @Field(() => String, { nullable: true })
  power?: string;

  @Field(() => CardCreateproducedManaInput, { nullable: true })
  producedMana?: CardCreateproducedManaInput;

  @Field(() => Boolean, { nullable: false })
  reserved!: boolean;

  @Field(() => String, { nullable: true })
  toughness?: string;

  @Field(() => String, { nullable: true })
  typeLine?: string;

  @Field(() => String, { nullable: true })
  artist?: string;

  @Field(() => Boolean, { nullable: false })
  booster!: boolean;

  @Field(() => String, { nullable: false })
  borderColor!: string;

  @Field(() => String, { nullable: true })
  cardBackId?: string;

  @Field(() => String, { nullable: false })
  collectorNumber!: string;

  @Field(() => Boolean, { nullable: true })
  contentWarning?: boolean;

  @Field(() => Boolean, { nullable: false })
  digital!: boolean;

  @Field(() => CardCreatefinishesInput, { nullable: true })
  finishes?: CardCreatefinishesInput;

  @Field(() => String, { nullable: true })
  flavorName?: string;

  @Field(() => CardCreateframeEffectsInput, { nullable: true })
  frameEffects?: CardCreateframeEffectsInput;

  @Field(() => String, { nullable: false })
  frame!: string;

  @Field(() => Boolean, { nullable: false })
  fullArt!: boolean;

  @Field(() => CardCreategamesInput, { nullable: true })
  games?: CardCreategamesInput;

  @Field(() => Boolean, { nullable: false })
  highresImage!: boolean;

  @Field(() => String, { nullable: true })
  illustrationId?: string;

  @Field(() => String, { nullable: false })
  imageStatus!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  imageUris?: any;

  @Field(() => GraphQLJSON, { nullable: false })
  prices!: any;

  @Field(() => String, { nullable: true })
  printedName?: string;

  @Field(() => String, { nullable: true })
  printedText?: string;

  @Field(() => String, { nullable: true })
  printedTypeLine?: string;

  @Field(() => Boolean, { nullable: false })
  promo!: boolean;

  @Field(() => CardCreatepromoTypesInput, { nullable: true })
  promoTypes?: CardCreatepromoTypesInput;

  @Field(() => GraphQLJSON, { nullable: true })
  purchaseUris?: any;

  @Field(() => String, { nullable: false })
  rarity!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  relatedUris!: any;

  @Field(() => Date, { nullable: false })
  releasedAt!: Date | string;

  @Field(() => Boolean, { nullable: false })
  reprint!: boolean;

  @Field(() => String, { nullable: false })
  scryfallSetUri!: string;

  @Field(() => String, { nullable: false })
  setCode!: string;

  @Field(() => String, { nullable: false })
  setName!: string;

  @Field(() => String, { nullable: false })
  setSearchUri!: string;

  @Field(() => String, { nullable: false })
  setType!: string;

  @Field(() => String, { nullable: false })
  setUri!: string;

  @Field(() => Boolean, { nullable: false })
  storySpotlight!: boolean;

  @Field(() => Boolean, { nullable: false })
  textless!: boolean;

  @Field(() => Boolean, { nullable: false })
  variation!: boolean;

  @Field(() => String, { nullable: true })
  varationOf?: string;

  @Field(() => String, { nullable: true })
  securityStamp?: string;

  @Field(() => String, { nullable: true })
  watermark?: string;

  @Field(() => RelatedCardCreateNestedManyWithoutCardInput, { nullable: true })
  relatedTo?: RelatedCardCreateNestedManyWithoutCardInput;

  @Field(() => RelatedCardCreateNestedManyWithoutReferenceInput, {
    nullable: true,
  })
  referencedBy?: RelatedCardCreateNestedManyWithoutReferenceInput;

  @Field(() => CardFaceCreateNestedManyWithoutCardInput, { nullable: true })
  cardFaces?: CardFaceCreateNestedManyWithoutCardInput;
}
