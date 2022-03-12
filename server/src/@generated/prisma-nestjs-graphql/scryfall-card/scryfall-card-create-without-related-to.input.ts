import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScryfallCardCreatemultiverseIdsInput } from '../prisma/scryfall-card-createmultiverse-ids.input';
import { ScryfallCardCreateallPartsInput } from '../prisma/scryfall-card-createall-parts.input';
import { ScryfallCardCreatecardFacesRawInput } from '../prisma/scryfall-card-createcard-faces-raw.input';
import { Float } from '@nestjs/graphql';
import { ScryfallCardCreatecolorIdentityInput } from '../prisma/scryfall-card-createcolor-identity.input';
import { ScryfallCardCreatecolorIndicatorInput } from '../prisma/scryfall-card-createcolor-indicator.input';
import { ScryfallCardCreatecolorsInput } from '../prisma/scryfall-card-createcolors.input';
import { ScryfallCardCreatekeywordsInput } from '../prisma/scryfall-card-createkeywords.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ScryfallCardCreateproducedManaInput } from '../prisma/scryfall-card-createproduced-mana.input';
import { ScryfallCardCreatefinishesInput } from '../prisma/scryfall-card-createfinishes.input';
import { ScryfallCardCreateframeEffectsInput } from '../prisma/scryfall-card-createframe-effects.input';
import { ScryfallCardCreategamesInput } from '../prisma/scryfall-card-creategames.input';
import { ScryfallCardCreatepromoTypesInput } from '../prisma/scryfall-card-createpromo-types.input';
import { ScryfallSetCreateNestedOneWithoutCardsInput } from '../scryfall-set/scryfall-set-create-nested-one-without-cards.input';
import { ScryfallRelatedCardCreateNestedManyWithoutReferenceInput } from '../scryfall-related-card/scryfall-related-card-create-nested-many-without-reference.input';
import { ScryfallCardFaceCreateNestedManyWithoutCardInput } from '../scryfall-card-face/scryfall-card-face-create-nested-many-without-card.input';
import { ScryfallPriceCreateNestedManyWithoutCardInput } from '../scryfall-price/scryfall-price-create-nested-many-without-card.input';
import { CardCreateNestedManyWithoutScryfallCardInput } from '../card/card-create-nested-many-without-scryfall-card.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardCreateWithoutRelatedToInput {
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

  @Field(() => ScryfallCardCreatemultiverseIdsInput, { nullable: true })
  multiverseIds?: ScryfallCardCreatemultiverseIdsInput;

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

  @Field(() => ScryfallCardCreateallPartsInput, { nullable: true })
  allParts?: ScryfallCardCreateallPartsInput;

  @Field(() => ScryfallCardCreatecardFacesRawInput, { nullable: true })
  cardFacesRaw?: ScryfallCardCreatecardFacesRawInput;

  @Field(() => Float, { nullable: true })
  cmc?: number;

  @Field(() => ScryfallCardCreatecolorIdentityInput, { nullable: true })
  colorIdentity?: ScryfallCardCreatecolorIdentityInput;

  @Field(() => ScryfallCardCreatecolorIndicatorInput, { nullable: true })
  colorIndicator?: ScryfallCardCreatecolorIndicatorInput;

  @Field(() => ScryfallCardCreatecolorsInput, { nullable: true })
  colors?: ScryfallCardCreatecolorsInput;

  @Field(() => Int, { nullable: true })
  edhrecRank?: number;

  @Field(() => String, { nullable: true })
  handModifier?: string;

  @Field(() => ScryfallCardCreatekeywordsInput, { nullable: true })
  keywords?: ScryfallCardCreatekeywordsInput;

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

  @Field(() => ScryfallCardCreateproducedManaInput, { nullable: true })
  producedMana?: ScryfallCardCreateproducedManaInput;

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

  @Field(() => ScryfallCardCreatefinishesInput, { nullable: true })
  finishes?: ScryfallCardCreatefinishesInput;

  @Field(() => String, { nullable: true })
  flavorName?: string;

  @Field(() => ScryfallCardCreateframeEffectsInput, { nullable: true })
  frameEffects?: ScryfallCardCreateframeEffectsInput;

  @Field(() => String, { nullable: false })
  frame!: string;

  @Field(() => Boolean, { nullable: false })
  fullArt!: boolean;

  @Field(() => ScryfallCardCreategamesInput, { nullable: true })
  games?: ScryfallCardCreategamesInput;

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

  @Field(() => ScryfallCardCreatepromoTypesInput, { nullable: true })
  promoTypes?: ScryfallCardCreatepromoTypesInput;

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

  @Field(() => ScryfallSetCreateNestedOneWithoutCardsInput, { nullable: false })
  set!: ScryfallSetCreateNestedOneWithoutCardsInput;

  @Field(() => ScryfallRelatedCardCreateNestedManyWithoutReferenceInput, {
    nullable: true,
  })
  referencedBy?: ScryfallRelatedCardCreateNestedManyWithoutReferenceInput;

  @Field(() => ScryfallCardFaceCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  cardFaces?: ScryfallCardFaceCreateNestedManyWithoutCardInput;

  @Field(() => ScryfallPriceCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  scryfallPrice?: ScryfallPriceCreateNestedManyWithoutCardInput;

  @Field(() => CardCreateNestedManyWithoutScryfallCardInput, { nullable: true })
  card?: CardCreateNestedManyWithoutScryfallCardInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
