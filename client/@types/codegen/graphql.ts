import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AddCardToCollectionInput = {
  cardId: Scalars['String'];
  collectionId: Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutCardsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BulkDataObjectType = {
  __typename?: 'BulkDataObjectType';
  /** The size of this file in integer bites */
  compressedSize: Scalars['Int'];
  /** The Content-Encoding encoding that will be used to transmit this file when you download it */
  contentEncoding: Scalars['String'];
  /** The MIME type of this file */
  contentType: Scalars['String'];
  /** A human-readable description for this file */
  description: Scalars['String'];
  /** The URI that hosts this bulk file for fetching */
  downloadUri: Scalars['String'];
  /** The unique ID for this bulk item */
  id: Scalars['String'];
  /** A human-readable string for this file */
  name: Scalars['String'];
  /** The object type for this bulk item (always "bulk_data") */
  object: Scalars['String'];
  /** A computer-readable string for the kind of bulk item */
  type: Scalars['String'];
  /** The time when this file was last updated */
  updatedAt: Scalars['DateTime'];
  /** The Scryfall API URI for this file */
  uri: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  _count: CardCount;
  canBeEtched: Scalars['Boolean'];
  canBeFoil: Scalars['Boolean'];
  canBeNonFoil: Scalars['Boolean'];
  collections: Array<CardsInCollection>;
  collectorNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currentPrice: ScryfallPrice;
  id: Scalars['ID'];
  isBorderless: Scalars['Boolean'];
  isExtendedArt: Scalars['Boolean'];
  isPaper: Scalars['Boolean'];
  isRetro: Scalars['Boolean'];
  isShowcase: Scalars['Boolean'];
  name: Scalars['String'];
  scryfallCard: ScryfallCard;
  scryfallCardId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CardCollectionsArgs = {
  cursor?: InputMaybe<CardsInCollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CardsInCollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CardsInCollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardsInCollectionWhereInput>;
};

export type CardCount = {
  __typename?: 'CardCount';
  collections: Scalars['Int'];
};

export type CardCreateNestedOneWithoutCollectionsInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<CardCreateWithoutCollectionsInput>;
};

export type CardCreateNestedOneWithoutCurrentPriceInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutCurrentPriceInput>;
  create?: InputMaybe<CardCreateWithoutCurrentPriceInput>;
};

export type CardCreateNestedOneWithoutScryfallCardInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutScryfallCardInput>;
  create?: InputMaybe<CardCreateWithoutScryfallCardInput>;
};

export type CardCreateOrConnectWithoutCollectionsInput = {
  create: CardCreateWithoutCollectionsInput;
  where: CardWhereUniqueInput;
};

export type CardCreateOrConnectWithoutCurrentPriceInput = {
  create: CardCreateWithoutCurrentPriceInput;
  where: CardWhereUniqueInput;
};

export type CardCreateOrConnectWithoutScryfallCardInput = {
  create: CardCreateWithoutScryfallCardInput;
  where: CardWhereUniqueInput;
};

export type CardCreateWithoutCollectionsInput = {
  canBeEtched?: InputMaybe<Scalars['Boolean']>;
  canBeFoil?: InputMaybe<Scalars['Boolean']>;
  canBeNonFoil?: InputMaybe<Scalars['Boolean']>;
  collectorNumber?: InputMaybe<Scalars['String']>;
  currentPrice?: InputMaybe<ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput>;
  id?: InputMaybe<Scalars['String']>;
  isBorderless?: InputMaybe<Scalars['Boolean']>;
  isExtendedArt?: InputMaybe<Scalars['Boolean']>;
  isPaper?: InputMaybe<Scalars['Boolean']>;
  isRetro?: InputMaybe<Scalars['Boolean']>;
  isShowcase?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  scryfallCard: ScryfallCardCreateNestedOneWithoutCardInput;
};

export type CardCreateWithoutCurrentPriceInput = {
  canBeEtched?: InputMaybe<Scalars['Boolean']>;
  canBeFoil?: InputMaybe<Scalars['Boolean']>;
  canBeNonFoil?: InputMaybe<Scalars['Boolean']>;
  collections?: InputMaybe<CardsInCollectionCreateNestedManyWithoutCardInput>;
  collectorNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isBorderless?: InputMaybe<Scalars['Boolean']>;
  isExtendedArt?: InputMaybe<Scalars['Boolean']>;
  isPaper?: InputMaybe<Scalars['Boolean']>;
  isRetro?: InputMaybe<Scalars['Boolean']>;
  isShowcase?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  scryfallCard: ScryfallCardCreateNestedOneWithoutCardInput;
};

export type CardCreateWithoutScryfallCardInput = {
  canBeEtched?: InputMaybe<Scalars['Boolean']>;
  canBeFoil?: InputMaybe<Scalars['Boolean']>;
  canBeNonFoil?: InputMaybe<Scalars['Boolean']>;
  collections?: InputMaybe<CardsInCollectionCreateNestedManyWithoutCardInput>;
  collectorNumber?: InputMaybe<Scalars['String']>;
  currentPrice?: InputMaybe<ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput>;
  id?: InputMaybe<Scalars['String']>;
  isBorderless?: InputMaybe<Scalars['Boolean']>;
  isExtendedArt?: InputMaybe<Scalars['Boolean']>;
  isPaper?: InputMaybe<Scalars['Boolean']>;
  isRetro?: InputMaybe<Scalars['Boolean']>;
  isShowcase?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CardOrderByWithRelationInput = {
  canBeEtched?: InputMaybe<SortOrder>;
  canBeFoil?: InputMaybe<SortOrder>;
  canBeNonFoil?: InputMaybe<SortOrder>;
  collections?: InputMaybe<CardsInCollectionOrderByRelationAggregateInput>;
  collectorNumber?: InputMaybe<SortOrder>;
  currentPrice?: InputMaybe<ScryfallPriceOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  isBorderless?: InputMaybe<SortOrder>;
  isExtendedArt?: InputMaybe<SortOrder>;
  isPaper?: InputMaybe<SortOrder>;
  isRetro?: InputMaybe<SortOrder>;
  isShowcase?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  scryfallCard?: InputMaybe<ScryfallCardOrderByWithRelationInput>;
  scryfallCardId?: InputMaybe<SortOrder>;
};

export type CardRelationFilter = {
  is?: InputMaybe<CardWhereInput>;
  isNot?: InputMaybe<CardWhereInput>;
};

export enum CardScalarFieldEnum {
  CanBeEtched = 'canBeEtched',
  CanBeFoil = 'canBeFoil',
  CanBeNonFoil = 'canBeNonFoil',
  CollectorNumber = 'collectorNumber',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsBorderless = 'isBorderless',
  IsExtendedArt = 'isExtendedArt',
  IsPaper = 'isPaper',
  IsRetro = 'isRetro',
  IsShowcase = 'isShowcase',
  Name = 'name',
  ScryfallCardId = 'scryfallCardId',
  UpdatedAt = 'updatedAt'
}

export type CardUpdateOneRequiredWithoutCollectionsInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<CardCreateWithoutCollectionsInput>;
  update?: InputMaybe<CardUpdateWithoutCollectionsInput>;
  upsert?: InputMaybe<CardUpsertWithoutCollectionsInput>;
};

export type CardUpdateOneWithoutCurrentPriceInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutCurrentPriceInput>;
  create?: InputMaybe<CardCreateWithoutCurrentPriceInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CardUpdateWithoutCurrentPriceInput>;
  upsert?: InputMaybe<CardUpsertWithoutCurrentPriceInput>;
};

export type CardUpdateOneWithoutScryfallCardInput = {
  connect?: InputMaybe<CardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CardCreateOrConnectWithoutScryfallCardInput>;
  create?: InputMaybe<CardCreateWithoutScryfallCardInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CardUpdateWithoutScryfallCardInput>;
  upsert?: InputMaybe<CardUpsertWithoutScryfallCardInput>;
};

export type CardUpdateWithoutCollectionsInput = {
  canBeEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeNonFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  collectorNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentPrice?: InputMaybe<ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBorderless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isExtendedArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPaper?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRetro?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isShowcase?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallCard?: InputMaybe<ScryfallCardUpdateOneRequiredWithoutCardInput>;
};

export type CardUpdateWithoutCurrentPriceInput = {
  canBeEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeNonFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  collections?: InputMaybe<CardsInCollectionUpdateManyWithoutCardInput>;
  collectorNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBorderless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isExtendedArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPaper?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRetro?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isShowcase?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallCard?: InputMaybe<ScryfallCardUpdateOneRequiredWithoutCardInput>;
};

export type CardUpdateWithoutScryfallCardInput = {
  canBeEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canBeNonFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  collections?: InputMaybe<CardsInCollectionUpdateManyWithoutCardInput>;
  collectorNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  currentPrice?: InputMaybe<ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBorderless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isExtendedArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isPaper?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isRetro?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isShowcase?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CardUpsertWithoutCollectionsInput = {
  create: CardCreateWithoutCollectionsInput;
  update: CardUpdateWithoutCollectionsInput;
};

export type CardUpsertWithoutCurrentPriceInput = {
  create: CardCreateWithoutCurrentPriceInput;
  update: CardUpdateWithoutCurrentPriceInput;
};

export type CardUpsertWithoutScryfallCardInput = {
  create: CardCreateWithoutScryfallCardInput;
  update: CardUpdateWithoutScryfallCardInput;
};

export type CardWhereInput = {
  AND?: InputMaybe<Array<CardWhereInput>>;
  NOT?: InputMaybe<Array<CardWhereInput>>;
  OR?: InputMaybe<Array<CardWhereInput>>;
  canBeEtched?: InputMaybe<BoolFilter>;
  canBeFoil?: InputMaybe<BoolFilter>;
  canBeNonFoil?: InputMaybe<BoolFilter>;
  collections?: InputMaybe<CardsInCollectionListRelationFilter>;
  collectorNumber?: InputMaybe<StringNullableFilter>;
  currentPrice?: InputMaybe<ScryfallPriceRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isBorderless?: InputMaybe<BoolFilter>;
  isExtendedArt?: InputMaybe<BoolFilter>;
  isPaper?: InputMaybe<BoolFilter>;
  isRetro?: InputMaybe<BoolFilter>;
  isShowcase?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  scryfallCard?: InputMaybe<ScryfallCardRelationFilter>;
  scryfallCardId?: InputMaybe<StringFilter>;
};

export type CardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  scryfallCardId?: InputMaybe<Scalars['String']>;
};

export type CardsInCollection = {
  __typename?: 'CardsInCollection';
  _count: CardsInCollectionCount;
  card: Card;
  cardId: Scalars['String'];
  collection: Collection;
  collectionId: Scalars['String'];
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isEtched: Scalars['Boolean'];
  isFoil: Scalars['Boolean'];
  price?: Maybe<CardsInCollectionCardPrice>;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
};


export type CardsInCollectionTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput = {
  cardId: Scalars['String'];
  collectionId: Scalars['String'];
  isEtched: Scalars['Boolean'];
  isFoil: Scalars['Boolean'];
};

export type CardsInCollectionCardPrice = {
  __typename?: 'CardsInCollectionCardPrice';
  eur: Scalars['Float'];
  usd: Scalars['Float'];
};

export type CardsInCollectionCount = {
  __typename?: 'CardsInCollectionCount';
  tags: Scalars['Int'];
};

export type CardsInCollectionCreateManyCardInput = {
  collectionId: Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsInCollectionCreateManyCardInputEnvelope = {
  data: Array<CardsInCollectionCreateManyCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CardsInCollectionCreateManyCollectionInput = {
  cardId: Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsInCollectionCreateManyCollectionInputEnvelope = {
  data: Array<CardsInCollectionCreateManyCollectionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CardsInCollectionCreateNestedManyWithoutCardInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutCardInput>>;
  createMany?: InputMaybe<CardsInCollectionCreateManyCardInputEnvelope>;
};

export type CardsInCollectionCreateNestedManyWithoutCollectionInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutCollectionInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutCollectionInput>>;
  createMany?: InputMaybe<CardsInCollectionCreateManyCollectionInputEnvelope>;
};

export type CardsInCollectionCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutTagsInput>>;
};

export type CardsInCollectionCreateOrConnectWithoutCardInput = {
  create: CardsInCollectionCreateWithoutCardInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionCreateOrConnectWithoutCollectionInput = {
  create: CardsInCollectionCreateWithoutCollectionInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionCreateOrConnectWithoutTagsInput = {
  create: CardsInCollectionCreateWithoutTagsInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionCreateWithoutCardInput = {
  collection: CollectionCreateNestedOneWithoutCardsInput;
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutCardsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsInCollectionCreateWithoutCollectionInput = {
  card: CardCreateNestedOneWithoutCollectionsInput;
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<TagCreateNestedManyWithoutCardsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsInCollectionCreateWithoutTagsInput = {
  card: CardCreateNestedOneWithoutCollectionsInput;
  collection: CollectionCreateNestedOneWithoutCardsInput;
  count?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsInCollectionListRelationFilter = {
  every?: InputMaybe<CardsInCollectionWhereInput>;
  none?: InputMaybe<CardsInCollectionWhereInput>;
  some?: InputMaybe<CardsInCollectionWhereInput>;
};

export type CardsInCollectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CardsInCollectionOrderByWithRelationInput = {
  card?: InputMaybe<CardOrderByWithRelationInput>;
  cardId?: InputMaybe<SortOrder>;
  collection?: InputMaybe<CollectionOrderByWithRelationInput>;
  collectionId?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isEtched?: InputMaybe<SortOrder>;
  isFoil?: InputMaybe<SortOrder>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CardsInCollectionScalarFieldEnum {
  CardId = 'cardId',
  CollectionId = 'collectionId',
  Count = 'count',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsEtched = 'isEtched',
  IsFoil = 'isFoil',
  UpdatedAt = 'updatedAt'
}

export type CardsInCollectionScalarWhereInput = {
  AND?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  OR?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  cardId?: InputMaybe<StringFilter>;
  collectionId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isEtched?: InputMaybe<BoolFilter>;
  isFoil?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CardsInCollectionUpdateInput = {
  card?: InputMaybe<CardUpdateOneRequiredWithoutCollectionsInput>;
  collection?: InputMaybe<CollectionUpdateOneRequiredWithoutCardsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutCardsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CardsInCollectionUpdateManyMutationInput = {
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CardsInCollectionUpdateManyWithWhereWithoutCardInput = {
  data: CardsInCollectionUpdateManyMutationInput;
  where: CardsInCollectionScalarWhereInput;
};

export type CardsInCollectionUpdateManyWithWhereWithoutCollectionInput = {
  data: CardsInCollectionUpdateManyMutationInput;
  where: CardsInCollectionScalarWhereInput;
};

export type CardsInCollectionUpdateManyWithWhereWithoutTagsInput = {
  data: CardsInCollectionUpdateManyMutationInput;
  where: CardsInCollectionScalarWhereInput;
};

export type CardsInCollectionUpdateManyWithoutCardInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutCardInput>>;
  createMany?: InputMaybe<CardsInCollectionCreateManyCardInputEnvelope>;
  delete?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CardsInCollectionUpdateWithWhereUniqueWithoutCardInput>>;
  updateMany?: InputMaybe<Array<CardsInCollectionUpdateManyWithWhereWithoutCardInput>>;
  upsert?: InputMaybe<Array<CardsInCollectionUpsertWithWhereUniqueWithoutCardInput>>;
};

export type CardsInCollectionUpdateManyWithoutCollectionInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutCollectionInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutCollectionInput>>;
  createMany?: InputMaybe<CardsInCollectionCreateManyCollectionInputEnvelope>;
  delete?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: InputMaybe<Array<CardsInCollectionUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: InputMaybe<Array<CardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type CardsInCollectionUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardsInCollectionCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<CardsInCollectionCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CardsInCollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CardsInCollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<Array<CardsInCollectionUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: InputMaybe<Array<CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type CardsInCollectionUpdateWithWhereUniqueWithoutCardInput = {
  data: CardsInCollectionUpdateWithoutCardInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput = {
  data: CardsInCollectionUpdateWithoutCollectionInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput = {
  data: CardsInCollectionUpdateWithoutTagsInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionUpdateWithoutCardInput = {
  collection?: InputMaybe<CollectionUpdateOneRequiredWithoutCardsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutCardsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CardsInCollectionUpdateWithoutCollectionInput = {
  card?: InputMaybe<CardUpdateOneRequiredWithoutCollectionsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<TagUpdateManyWithoutCardsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CardsInCollectionUpdateWithoutTagsInput = {
  card?: InputMaybe<CardUpdateOneRequiredWithoutCollectionsInput>;
  collection?: InputMaybe<CollectionUpdateOneRequiredWithoutCardsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CardsInCollectionUpsertWithWhereUniqueWithoutCardInput = {
  create: CardsInCollectionCreateWithoutCardInput;
  update: CardsInCollectionUpdateWithoutCardInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput = {
  create: CardsInCollectionCreateWithoutCollectionInput;
  update: CardsInCollectionUpdateWithoutCollectionInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput = {
  create: CardsInCollectionCreateWithoutTagsInput;
  update: CardsInCollectionUpdateWithoutTagsInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionWhereInput = {
  AND?: InputMaybe<Array<CardsInCollectionWhereInput>>;
  NOT?: InputMaybe<Array<CardsInCollectionWhereInput>>;
  OR?: InputMaybe<Array<CardsInCollectionWhereInput>>;
  card?: InputMaybe<CardRelationFilter>;
  cardId?: InputMaybe<StringFilter>;
  collection?: InputMaybe<CollectionRelationFilter>;
  collectionId?: InputMaybe<StringFilter>;
  count?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isEtched?: InputMaybe<BoolFilter>;
  isFoil?: InputMaybe<BoolFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CardsInCollectionWhereUniqueInput = {
  cardId_collectionId_isFoil_isEtched?: InputMaybe<CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  _count: CollectionCount;
  cards: Array<CardsInCollection>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type CollectionCardsArgs = {
  cursor?: InputMaybe<CardsInCollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CardsInCollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CardsInCollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardsInCollectionWhereInput>;
};

export type CollectionCount = {
  __typename?: 'CollectionCount';
  cards: Scalars['Int'];
};

export type CollectionCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CollectionCreateManyUserInputEnvelope = {
  data: Array<CollectionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CollectionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollectionCreateManyUserInputEnvelope>;
};

export type CollectionCreateNestedOneWithoutCardsInput = {
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CollectionCreateOrConnectWithoutCardsInput>;
  create?: InputMaybe<CollectionCreateWithoutCardsInput>;
};

export type CollectionCreateOrConnectWithoutCardsInput = {
  create: CollectionCreateWithoutCardsInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateOrConnectWithoutUserInput = {
  create: CollectionCreateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateWithoutCardsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user: UserCreateNestedOneWithoutCollectionsInput;
};

export type CollectionCreateWithoutUserInput = {
  cards?: InputMaybe<CardsInCollectionCreateNestedManyWithoutCollectionInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CollectionListRelationFilter = {
  every?: InputMaybe<CollectionWhereInput>;
  none?: InputMaybe<CollectionWhereInput>;
  some?: InputMaybe<CollectionWhereInput>;
};

export type CollectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CollectionOrderByWithRelationInput = {
  cards?: InputMaybe<CardsInCollectionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type CollectionRelationFilter = {
  is?: InputMaybe<CollectionWhereInput>;
  isNot?: InputMaybe<CollectionWhereInput>;
};

export enum CollectionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CollectionScalarWhereInput = {
  AND?: InputMaybe<Array<CollectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<CollectionScalarWhereInput>>;
  OR?: InputMaybe<Array<CollectionScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CollectionUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CollectionUpdateManyWithWhereWithoutUserInput = {
  data: CollectionUpdateManyMutationInput;
  where: CollectionScalarWhereInput;
};

export type CollectionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CollectionCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollectionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CollectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  update?: InputMaybe<Array<CollectionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CollectionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CollectionUpdateOneRequiredWithoutCardsInput = {
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CollectionCreateOrConnectWithoutCardsInput>;
  create?: InputMaybe<CollectionCreateWithoutCardsInput>;
  update?: InputMaybe<CollectionUpdateWithoutCardsInput>;
  upsert?: InputMaybe<CollectionUpsertWithoutCardsInput>;
};

export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
  data: CollectionUpdateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionUpdateWithoutCardsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCollectionsInput>;
};

export type CollectionUpdateWithoutUserInput = {
  cards?: InputMaybe<CardsInCollectionUpdateManyWithoutCollectionInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
  create: CollectionCreateWithoutUserInput;
  update: CollectionUpdateWithoutUserInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertWithoutCardsInput = {
  create: CollectionCreateWithoutCardsInput;
  update: CollectionUpdateWithoutCardsInput;
};

export type CollectionUserIdNameCompoundUniqueInput = {
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CollectionWhereInput = {
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  cards?: InputMaybe<CardsInCollectionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_name?: InputMaybe<CollectionUserIdNameCompoundUniqueInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['Int']>>;
  has?: InputMaybe<Scalars['Int']>;
  hasEvery?: InputMaybe<Array<Scalars['Int']>>;
  hasSome?: InputMaybe<Array<Scalars['Int']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']>>;
  has?: InputMaybe<Scalars['JSON']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCardToCollection: CardsInCollection;
  addCollection: Collection;
  createTag: Tag;
  deleteCardFromCollection: CardsInCollection;
  downloadBulkData: Scalars['Boolean'];
  getOrCreateUser: User;
  processAllParts: Scalars['Boolean'];
  processBulkData: Scalars['Boolean'];
  processCardFaces: Scalars['Boolean'];
  processCardNames: Scalars['Boolean'];
  processDaily: Scalars['Boolean'];
  processPriceData: Scalars['Boolean'];
  processSetData: Scalars['Boolean'];
  processUpdateCardList: Scalars['Boolean'];
  updateCardsInCollection: CardsInCollection;
};


export type MutationAddCardToCollectionArgs = {
  input: AddCardToCollectionInput;
};


export type MutationAddCollectionArgs = {
  input: CollectionCreateWithoutUserInput;
};


export type MutationCreateTagArgs = {
  input: TagCreateWithoutUserInput;
};


export type MutationDeleteCardFromCollectionArgs = {
  where: CardsInCollectionWhereUniqueInput;
};


export type MutationDownloadBulkDataArgs = {
  typeName: Scalars['String'];
};


export type MutationGetOrCreateUserArgs = {
  input: UserCreateWithoutCollectionsInput;
};


export type MutationUpdateCardsInCollectionArgs = {
  id: Scalars['String'];
  input: CardsInCollectionUpdateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allBulkData: Array<BulkDataObjectType>;
  allCards: Array<Card>;
  allCardsInCollection: Array<CardsInCollection>;
  allCollections: Array<Collection>;
  allScryfallCardNames: Array<ScryfallCardName>;
  allScryfallCards: Array<ScryfallCard>;
  allScryfallPrices: Array<ScryfallPrice>;
  allScryfallSets: Array<ScryfallSet>;
  allTags: Array<Tag>;
  card: Card;
  cardsInCollection: CardsInCollection;
  collection: Collection;
};


export type QueryAllCardsArgs = {
  cursor?: InputMaybe<CardWhereUniqueInput>;
  distinct?: InputMaybe<Array<CardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardWhereInput>;
};


export type QueryAllCardsInCollectionArgs = {
  cursor?: InputMaybe<CardsInCollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CardsInCollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CardsInCollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardsInCollectionWhereInput>;
};


export type QueryAllCollectionsArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryAllScryfallCardNamesArgs = {
  cursor?: InputMaybe<ScryfallCardNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallCardNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallCardNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallCardNameWhereInput>;
};


export type QueryAllScryfallCardsArgs = {
  cursor?: InputMaybe<ScryfallCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallCardWhereInput>;
};


export type QueryAllScryfallPricesArgs = {
  cursor?: InputMaybe<ScryfallPriceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallPriceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallPriceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallPriceWhereInput>;
};


export type QueryAllScryfallSetsArgs = {
  cursor?: InputMaybe<ScryfallSetWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallSetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallSetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallSetWhereInput>;
};


export type QueryAllTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryCardArgs = {
  where: CardWhereUniqueInput;
};


export type QueryCardsInCollectionArgs = {
  cursor?: InputMaybe<CardsInCollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CardsInCollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CardsInCollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardsInCollectionWhereInput>;
};


export type QueryCollectionArgs = {
  cursor?: InputMaybe<CollectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<CollectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CollectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ScryfallCard = {
  __typename?: 'ScryfallCard';
  _count: ScryfallCardCount;
  allParts?: Maybe<Array<Scalars['JSON']>>;
  arenaId?: Maybe<Scalars['Int']>;
  artist?: Maybe<Scalars['String']>;
  booster: Scalars['Boolean'];
  borderColor: Scalars['String'];
  card?: Maybe<Card>;
  cardBackId?: Maybe<Scalars['String']>;
  cardFaces: Array<ScryfallCardFace>;
  cardFacesRaw?: Maybe<Array<Scalars['JSON']>>;
  cardmarketId?: Maybe<Scalars['Int']>;
  cmc?: Maybe<Scalars['Float']>;
  collectorNumber: Scalars['String'];
  colorIdentity?: Maybe<Array<Scalars['String']>>;
  colorIndicator?: Maybe<Array<Scalars['String']>>;
  colors?: Maybe<Array<Scalars['String']>>;
  contentWarning?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  digital: Scalars['Boolean'];
  edhrecRank?: Maybe<Scalars['Int']>;
  finishes?: Maybe<Array<Scalars['String']>>;
  flavorName?: Maybe<Scalars['String']>;
  frame: Scalars['String'];
  frameEffects?: Maybe<Array<Scalars['String']>>;
  fullArt: Scalars['Boolean'];
  games?: Maybe<Array<Scalars['String']>>;
  handModifier?: Maybe<Scalars['String']>;
  highresImage: Scalars['Boolean'];
  id: Scalars['ID'];
  illustrationId?: Maybe<Scalars['String']>;
  imageStatus: Scalars['String'];
  imageUris?: Maybe<Scalars['JSON']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: Scalars['JSON'];
  lifeModifier?: Maybe<Scalars['String']>;
  loyalty?: Maybe<Scalars['String']>;
  manaCost?: Maybe<Scalars['String']>;
  mtgoFoilId?: Maybe<Scalars['Int']>;
  mtgoId?: Maybe<Scalars['Int']>;
  multiverseIds?: Maybe<Array<Scalars['Int']>>;
  name: Scalars['String'];
  oracleId?: Maybe<Scalars['String']>;
  oracleText?: Maybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  power?: Maybe<Scalars['String']>;
  prices: Scalars['JSON'];
  printedName?: Maybe<Scalars['String']>;
  printedText?: Maybe<Scalars['String']>;
  printedTypeLine?: Maybe<Scalars['String']>;
  printsSearchUri: Scalars['String'];
  producedMana?: Maybe<Array<Scalars['String']>>;
  promo: Scalars['Boolean'];
  promoTypes?: Maybe<Array<Scalars['String']>>;
  purchaseUris?: Maybe<Scalars['JSON']>;
  rarity: Scalars['String'];
  referencedBy: Array<ScryfallRelatedCard>;
  relatedTo: Array<ScryfallRelatedCard>;
  relatedUris: Scalars['JSON'];
  releasedAt: Scalars['DateTime'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulingUri?: Maybe<Scalars['String']>;
  scryfallMostRecentPrice?: Maybe<ScryfallPrice>;
  scryfallPrice: Array<ScryfallPrice>;
  scryfallPricesGroupBy: Array<ScryfallPriceGroupBy>;
  scryfallSetUri: Scalars['String'];
  scryfallUri: Scalars['String'];
  securityStamp?: Maybe<Scalars['String']>;
  set: ScryfallSet;
  setCode: Scalars['String'];
  setId: Scalars['String'];
  setName: Scalars['String'];
  setSearchUri: Scalars['String'];
  setType: Scalars['String'];
  setUri: Scalars['String'];
  storySpotlight: Scalars['Boolean'];
  tcgplayerEtchedId?: Maybe<Scalars['Int']>;
  tcgplayerId?: Maybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: Maybe<Scalars['String']>;
  typeLine?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  uri: Scalars['String'];
  varationOf?: Maybe<Scalars['String']>;
  variation: Scalars['Boolean'];
  watermark?: Maybe<Scalars['String']>;
};


export type ScryfallCardScryfallPriceArgs = {
  cursor?: InputMaybe<ScryfallPriceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallPriceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallPriceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallPriceWhereInput>;
};


export type ScryfallCardScryfallPricesGroupByArgs = {
  _avg?: InputMaybe<ScryfallPriceAvgAggregateInput>;
  _count?: InputMaybe<ScryfallPriceCountAggregateInput>;
  _max?: InputMaybe<ScryfallPriceMaxAggregateInput>;
  _min?: InputMaybe<ScryfallPriceMinAggregateInput>;
  _sum?: InputMaybe<ScryfallPriceSumAggregateInput>;
  having?: InputMaybe<ScryfallPriceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ScryfallPriceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallPriceWhereInput>;
};

export type ScryfallCardCount = {
  __typename?: 'ScryfallCardCount';
  cardFaces: Scalars['Int'];
  referencedBy: Scalars['Int'];
  relatedTo: Scalars['Int'];
  scryfallPrice: Scalars['Int'];
};

export type ScryfallCardCreateNestedOneWithoutCardInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutCardInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutCardInput>;
};

export type ScryfallCardCreateNestedOneWithoutReferencedByInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutReferencedByInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutReferencedByInput>;
};

export type ScryfallCardCreateNestedOneWithoutRelatedToInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutRelatedToInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutRelatedToInput>;
};

export type ScryfallCardCreateNestedOneWithoutScryfallPriceInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutScryfallPriceInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutScryfallPriceInput>;
};

export type ScryfallCardCreateOrConnectWithoutCardInput = {
  create: ScryfallCardCreateWithoutCardInput;
  where: ScryfallCardWhereUniqueInput;
};

export type ScryfallCardCreateOrConnectWithoutReferencedByInput = {
  create: ScryfallCardCreateWithoutReferencedByInput;
  where: ScryfallCardWhereUniqueInput;
};

export type ScryfallCardCreateOrConnectWithoutRelatedToInput = {
  create: ScryfallCardCreateWithoutRelatedToInput;
  where: ScryfallCardWhereUniqueInput;
};

export type ScryfallCardCreateOrConnectWithoutScryfallPriceInput = {
  create: ScryfallCardCreateWithoutScryfallPriceInput;
  where: ScryfallCardWhereUniqueInput;
};

export type ScryfallCardCreateWithoutCardInput = {
  allParts?: InputMaybe<ScryfallCardCreateallPartsInput>;
  arenaId?: InputMaybe<Scalars['Int']>;
  artist?: InputMaybe<Scalars['String']>;
  booster: Scalars['Boolean'];
  borderColor: Scalars['String'];
  cardBackId?: InputMaybe<Scalars['String']>;
  cardFaces?: InputMaybe<ScryfallCardFaceCreateNestedManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardCreatecardFacesRawInput>;
  cardmarketId?: InputMaybe<Scalars['Int']>;
  cmc?: InputMaybe<Scalars['Float']>;
  collectorNumber: Scalars['String'];
  colorIdentity?: InputMaybe<ScryfallCardCreatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardCreatecolorsInput>;
  contentWarning?: InputMaybe<Scalars['Boolean']>;
  digital: Scalars['Boolean'];
  edhrecRank?: InputMaybe<Scalars['Int']>;
  finishes?: InputMaybe<ScryfallCardCreatefinishesInput>;
  flavorName?: InputMaybe<Scalars['String']>;
  frame: Scalars['String'];
  frameEffects?: InputMaybe<ScryfallCardCreateframeEffectsInput>;
  fullArt: Scalars['Boolean'];
  games?: InputMaybe<ScryfallCardCreategamesInput>;
  handModifier?: InputMaybe<Scalars['String']>;
  highresImage: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageStatus: Scalars['String'];
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardCreatekeywordsInput>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: Scalars['JSON'];
  lifeModifier?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  mtgoFoilId?: InputMaybe<Scalars['Int']>;
  mtgoId?: InputMaybe<Scalars['Int']>;
  multiverseIds?: InputMaybe<ScryfallCardCreatemultiverseIdsInput>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  power?: InputMaybe<Scalars['String']>;
  prices: Scalars['JSON'];
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  printsSearchUri: Scalars['String'];
  producedMana?: InputMaybe<ScryfallCardCreateproducedManaInput>;
  promo: Scalars['Boolean'];
  promoTypes?: InputMaybe<ScryfallCardCreatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity: Scalars['String'];
  referencedBy?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutReferenceInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutCardInput>;
  relatedUris: Scalars['JSON'];
  releasedAt: Scalars['DateTime'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulingUri?: InputMaybe<Scalars['String']>;
  scryfallPrice?: InputMaybe<ScryfallPriceCreateNestedManyWithoutCardInput>;
  scryfallSetUri: Scalars['String'];
  scryfallUri: Scalars['String'];
  securityStamp?: InputMaybe<Scalars['String']>;
  set: ScryfallSetCreateNestedOneWithoutCardsInput;
  setCode: Scalars['String'];
  setName: Scalars['String'];
  setSearchUri: Scalars['String'];
  setType: Scalars['String'];
  setUri: Scalars['String'];
  storySpotlight: Scalars['Boolean'];
  tcgplayerEtchedId?: InputMaybe<Scalars['Int']>;
  tcgplayerId?: InputMaybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
  varationOf?: InputMaybe<Scalars['String']>;
  variation: Scalars['Boolean'];
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardCreateWithoutReferencedByInput = {
  allParts?: InputMaybe<ScryfallCardCreateallPartsInput>;
  arenaId?: InputMaybe<Scalars['Int']>;
  artist?: InputMaybe<Scalars['String']>;
  booster: Scalars['Boolean'];
  borderColor: Scalars['String'];
  card?: InputMaybe<CardCreateNestedOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<Scalars['String']>;
  cardFaces?: InputMaybe<ScryfallCardFaceCreateNestedManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardCreatecardFacesRawInput>;
  cardmarketId?: InputMaybe<Scalars['Int']>;
  cmc?: InputMaybe<Scalars['Float']>;
  collectorNumber: Scalars['String'];
  colorIdentity?: InputMaybe<ScryfallCardCreatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardCreatecolorsInput>;
  contentWarning?: InputMaybe<Scalars['Boolean']>;
  digital: Scalars['Boolean'];
  edhrecRank?: InputMaybe<Scalars['Int']>;
  finishes?: InputMaybe<ScryfallCardCreatefinishesInput>;
  flavorName?: InputMaybe<Scalars['String']>;
  frame: Scalars['String'];
  frameEffects?: InputMaybe<ScryfallCardCreateframeEffectsInput>;
  fullArt: Scalars['Boolean'];
  games?: InputMaybe<ScryfallCardCreategamesInput>;
  handModifier?: InputMaybe<Scalars['String']>;
  highresImage: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageStatus: Scalars['String'];
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardCreatekeywordsInput>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: Scalars['JSON'];
  lifeModifier?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  mtgoFoilId?: InputMaybe<Scalars['Int']>;
  mtgoId?: InputMaybe<Scalars['Int']>;
  multiverseIds?: InputMaybe<ScryfallCardCreatemultiverseIdsInput>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  power?: InputMaybe<Scalars['String']>;
  prices: Scalars['JSON'];
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  printsSearchUri: Scalars['String'];
  producedMana?: InputMaybe<ScryfallCardCreateproducedManaInput>;
  promo: Scalars['Boolean'];
  promoTypes?: InputMaybe<ScryfallCardCreatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity: Scalars['String'];
  relatedTo?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutCardInput>;
  relatedUris: Scalars['JSON'];
  releasedAt: Scalars['DateTime'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulingUri?: InputMaybe<Scalars['String']>;
  scryfallPrice?: InputMaybe<ScryfallPriceCreateNestedManyWithoutCardInput>;
  scryfallSetUri: Scalars['String'];
  scryfallUri: Scalars['String'];
  securityStamp?: InputMaybe<Scalars['String']>;
  set: ScryfallSetCreateNestedOneWithoutCardsInput;
  setCode: Scalars['String'];
  setName: Scalars['String'];
  setSearchUri: Scalars['String'];
  setType: Scalars['String'];
  setUri: Scalars['String'];
  storySpotlight: Scalars['Boolean'];
  tcgplayerEtchedId?: InputMaybe<Scalars['Int']>;
  tcgplayerId?: InputMaybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
  varationOf?: InputMaybe<Scalars['String']>;
  variation: Scalars['Boolean'];
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardCreateWithoutRelatedToInput = {
  allParts?: InputMaybe<ScryfallCardCreateallPartsInput>;
  arenaId?: InputMaybe<Scalars['Int']>;
  artist?: InputMaybe<Scalars['String']>;
  booster: Scalars['Boolean'];
  borderColor: Scalars['String'];
  card?: InputMaybe<CardCreateNestedOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<Scalars['String']>;
  cardFaces?: InputMaybe<ScryfallCardFaceCreateNestedManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardCreatecardFacesRawInput>;
  cardmarketId?: InputMaybe<Scalars['Int']>;
  cmc?: InputMaybe<Scalars['Float']>;
  collectorNumber: Scalars['String'];
  colorIdentity?: InputMaybe<ScryfallCardCreatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardCreatecolorsInput>;
  contentWarning?: InputMaybe<Scalars['Boolean']>;
  digital: Scalars['Boolean'];
  edhrecRank?: InputMaybe<Scalars['Int']>;
  finishes?: InputMaybe<ScryfallCardCreatefinishesInput>;
  flavorName?: InputMaybe<Scalars['String']>;
  frame: Scalars['String'];
  frameEffects?: InputMaybe<ScryfallCardCreateframeEffectsInput>;
  fullArt: Scalars['Boolean'];
  games?: InputMaybe<ScryfallCardCreategamesInput>;
  handModifier?: InputMaybe<Scalars['String']>;
  highresImage: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageStatus: Scalars['String'];
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardCreatekeywordsInput>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: Scalars['JSON'];
  lifeModifier?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  mtgoFoilId?: InputMaybe<Scalars['Int']>;
  mtgoId?: InputMaybe<Scalars['Int']>;
  multiverseIds?: InputMaybe<ScryfallCardCreatemultiverseIdsInput>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  power?: InputMaybe<Scalars['String']>;
  prices: Scalars['JSON'];
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  printsSearchUri: Scalars['String'];
  producedMana?: InputMaybe<ScryfallCardCreateproducedManaInput>;
  promo: Scalars['Boolean'];
  promoTypes?: InputMaybe<ScryfallCardCreatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity: Scalars['String'];
  referencedBy?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutReferenceInput>;
  relatedUris: Scalars['JSON'];
  releasedAt: Scalars['DateTime'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulingUri?: InputMaybe<Scalars['String']>;
  scryfallPrice?: InputMaybe<ScryfallPriceCreateNestedManyWithoutCardInput>;
  scryfallSetUri: Scalars['String'];
  scryfallUri: Scalars['String'];
  securityStamp?: InputMaybe<Scalars['String']>;
  set: ScryfallSetCreateNestedOneWithoutCardsInput;
  setCode: Scalars['String'];
  setName: Scalars['String'];
  setSearchUri: Scalars['String'];
  setType: Scalars['String'];
  setUri: Scalars['String'];
  storySpotlight: Scalars['Boolean'];
  tcgplayerEtchedId?: InputMaybe<Scalars['Int']>;
  tcgplayerId?: InputMaybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
  varationOf?: InputMaybe<Scalars['String']>;
  variation: Scalars['Boolean'];
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardCreateWithoutScryfallPriceInput = {
  allParts?: InputMaybe<ScryfallCardCreateallPartsInput>;
  arenaId?: InputMaybe<Scalars['Int']>;
  artist?: InputMaybe<Scalars['String']>;
  booster: Scalars['Boolean'];
  borderColor: Scalars['String'];
  card?: InputMaybe<CardCreateNestedOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<Scalars['String']>;
  cardFaces?: InputMaybe<ScryfallCardFaceCreateNestedManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardCreatecardFacesRawInput>;
  cardmarketId?: InputMaybe<Scalars['Int']>;
  cmc?: InputMaybe<Scalars['Float']>;
  collectorNumber: Scalars['String'];
  colorIdentity?: InputMaybe<ScryfallCardCreatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardCreatecolorsInput>;
  contentWarning?: InputMaybe<Scalars['Boolean']>;
  digital: Scalars['Boolean'];
  edhrecRank?: InputMaybe<Scalars['Int']>;
  finishes?: InputMaybe<ScryfallCardCreatefinishesInput>;
  flavorName?: InputMaybe<Scalars['String']>;
  frame: Scalars['String'];
  frameEffects?: InputMaybe<ScryfallCardCreateframeEffectsInput>;
  fullArt: Scalars['Boolean'];
  games?: InputMaybe<ScryfallCardCreategamesInput>;
  handModifier?: InputMaybe<Scalars['String']>;
  highresImage: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageStatus: Scalars['String'];
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardCreatekeywordsInput>;
  lang: Scalars['String'];
  layout: Scalars['String'];
  legalities: Scalars['JSON'];
  lifeModifier?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  mtgoFoilId?: InputMaybe<Scalars['Int']>;
  mtgoId?: InputMaybe<Scalars['Int']>;
  multiverseIds?: InputMaybe<ScryfallCardCreatemultiverseIdsInput>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  oversized: Scalars['Boolean'];
  power?: InputMaybe<Scalars['String']>;
  prices: Scalars['JSON'];
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  printsSearchUri: Scalars['String'];
  producedMana?: InputMaybe<ScryfallCardCreateproducedManaInput>;
  promo: Scalars['Boolean'];
  promoTypes?: InputMaybe<ScryfallCardCreatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity: Scalars['String'];
  referencedBy?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutReferenceInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardCreateNestedManyWithoutCardInput>;
  relatedUris: Scalars['JSON'];
  releasedAt: Scalars['DateTime'];
  reprint: Scalars['Boolean'];
  reserved: Scalars['Boolean'];
  rulingUri?: InputMaybe<Scalars['String']>;
  scryfallSetUri: Scalars['String'];
  scryfallUri: Scalars['String'];
  securityStamp?: InputMaybe<Scalars['String']>;
  set: ScryfallSetCreateNestedOneWithoutCardsInput;
  setCode: Scalars['String'];
  setName: Scalars['String'];
  setSearchUri: Scalars['String'];
  setType: Scalars['String'];
  setUri: Scalars['String'];
  storySpotlight: Scalars['Boolean'];
  tcgplayerEtchedId?: InputMaybe<Scalars['Int']>;
  tcgplayerId?: InputMaybe<Scalars['Int']>;
  textless: Scalars['Boolean'];
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
  varationOf?: InputMaybe<Scalars['String']>;
  variation: Scalars['Boolean'];
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardCreateallPartsInput = {
  set: Array<Scalars['JSON']>;
};

export type ScryfallCardCreatecardFacesRawInput = {
  set: Array<Scalars['JSON']>;
};

export type ScryfallCardCreatecolorIdentityInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatecolorIndicatorInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatecolorsInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatefinishesInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreateframeEffectsInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreategamesInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatekeywordsInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatemultiverseIdsInput = {
  set: Array<Scalars['Int']>;
};

export type ScryfallCardCreateproducedManaInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardCreatepromoTypesInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardFace = {
  __typename?: 'ScryfallCardFace';
  artist?: Maybe<Scalars['String']>;
  card: ScryfallCard;
  cardId: Scalars['String'];
  cmc?: Maybe<Scalars['Float']>;
  colorIndicator?: Maybe<Array<Scalars['String']>>;
  colors?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  flavorText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  illustrationId?: Maybe<Scalars['String']>;
  imageUris?: Maybe<Scalars['JSON']>;
  layout?: Maybe<Scalars['String']>;
  loyalty?: Maybe<Scalars['String']>;
  manaCost?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  oracleId?: Maybe<Scalars['String']>;
  oracleText?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['String']>;
  printedName?: Maybe<Scalars['String']>;
  printedText?: Maybe<Scalars['String']>;
  printedTypeLine?: Maybe<Scalars['String']>;
  toughness?: Maybe<Scalars['String']>;
  typeLine?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  watermark?: Maybe<Scalars['String']>;
};

export type ScryfallCardFaceCreateManyCardInput = {
  artist?: InputMaybe<Scalars['String']>;
  cmc?: InputMaybe<Scalars['Float']>;
  colorIndicator?: InputMaybe<ScryfallCardFaceCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardFaceCreatecolorsInput>;
  flavorText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  layout?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardFaceCreateManyCardInputEnvelope = {
  data: Array<ScryfallCardFaceCreateManyCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallCardFaceCreateNestedManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallCardFaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallCardFaceCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallCardFaceCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallCardFaceCreateManyCardInputEnvelope>;
};

export type ScryfallCardFaceCreateOrConnectWithoutCardInput = {
  create: ScryfallCardFaceCreateWithoutCardInput;
  where: ScryfallCardFaceWhereUniqueInput;
};

export type ScryfallCardFaceCreateWithoutCardInput = {
  artist?: InputMaybe<Scalars['String']>;
  cmc?: InputMaybe<Scalars['Float']>;
  colorIndicator?: InputMaybe<ScryfallCardFaceCreatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardFaceCreatecolorsInput>;
  flavorText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  illustrationId?: InputMaybe<Scalars['String']>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  layout?: InputMaybe<Scalars['String']>;
  loyalty?: InputMaybe<Scalars['String']>;
  manaCost?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  oracleId?: InputMaybe<Scalars['String']>;
  oracleText?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  printedName?: InputMaybe<Scalars['String']>;
  printedText?: InputMaybe<Scalars['String']>;
  printedTypeLine?: InputMaybe<Scalars['String']>;
  toughness?: InputMaybe<Scalars['String']>;
  typeLine?: InputMaybe<Scalars['String']>;
  watermark?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardFaceCreatecolorIndicatorInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardFaceCreatecolorsInput = {
  set: Array<Scalars['String']>;
};

export type ScryfallCardFaceListRelationFilter = {
  every?: InputMaybe<ScryfallCardFaceWhereInput>;
  none?: InputMaybe<ScryfallCardFaceWhereInput>;
  some?: InputMaybe<ScryfallCardFaceWhereInput>;
};

export type ScryfallCardFaceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScryfallCardFaceScalarWhereInput = {
  AND?: InputMaybe<Array<ScryfallCardFaceScalarWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallCardFaceScalarWhereInput>>;
  OR?: InputMaybe<Array<ScryfallCardFaceScalarWhereInput>>;
  artist?: InputMaybe<StringNullableFilter>;
  cardId?: InputMaybe<StringFilter>;
  cmc?: InputMaybe<FloatNullableFilter>;
  colorIndicator?: InputMaybe<StringNullableListFilter>;
  colors?: InputMaybe<StringNullableListFilter>;
  flavorText?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  illustrationId?: InputMaybe<StringNullableFilter>;
  imageUris?: InputMaybe<JsonNullableFilter>;
  layout?: InputMaybe<StringNullableFilter>;
  loyalty?: InputMaybe<StringNullableFilter>;
  manaCost?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  oracleId?: InputMaybe<StringNullableFilter>;
  oracleText?: InputMaybe<StringNullableFilter>;
  power?: InputMaybe<StringNullableFilter>;
  printedName?: InputMaybe<StringNullableFilter>;
  printedText?: InputMaybe<StringNullableFilter>;
  printedTypeLine?: InputMaybe<StringNullableFilter>;
  toughness?: InputMaybe<StringNullableFilter>;
  typeLine?: InputMaybe<StringNullableFilter>;
  watermark?: InputMaybe<StringNullableFilter>;
};

export type ScryfallCardFaceUpdateManyMutationInput = {
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  colorIndicator?: InputMaybe<ScryfallCardFaceUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardFaceUpdatecolorsInput>;
  flavorText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  layout?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardFaceUpdateManyWithWhereWithoutCardInput = {
  data: ScryfallCardFaceUpdateManyMutationInput;
  where: ScryfallCardFaceScalarWhereInput;
};

export type ScryfallCardFaceUpdateManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallCardFaceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallCardFaceCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallCardFaceCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallCardFaceCreateManyCardInputEnvelope>;
  delete?: InputMaybe<Array<ScryfallCardFaceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScryfallCardFaceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScryfallCardFaceWhereUniqueInput>>;
  set?: InputMaybe<Array<ScryfallCardFaceWhereUniqueInput>>;
  update?: InputMaybe<Array<ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput>>;
  updateMany?: InputMaybe<Array<ScryfallCardFaceUpdateManyWithWhereWithoutCardInput>>;
  upsert?: InputMaybe<Array<ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput>>;
};

export type ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput = {
  data: ScryfallCardFaceUpdateWithoutCardInput;
  where: ScryfallCardFaceWhereUniqueInput;
};

export type ScryfallCardFaceUpdateWithoutCardInput = {
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  colorIndicator?: InputMaybe<ScryfallCardFaceUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardFaceUpdatecolorsInput>;
  flavorText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  layout?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardFaceUpdatecolorIndicatorInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardFaceUpdatecolorsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput = {
  create: ScryfallCardFaceCreateWithoutCardInput;
  update: ScryfallCardFaceUpdateWithoutCardInput;
  where: ScryfallCardFaceWhereUniqueInput;
};

export type ScryfallCardFaceWhereInput = {
  AND?: InputMaybe<Array<ScryfallCardFaceWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallCardFaceWhereInput>>;
  OR?: InputMaybe<Array<ScryfallCardFaceWhereInput>>;
  artist?: InputMaybe<StringNullableFilter>;
  card?: InputMaybe<ScryfallCardRelationFilter>;
  cardId?: InputMaybe<StringFilter>;
  cmc?: InputMaybe<FloatNullableFilter>;
  colorIndicator?: InputMaybe<StringNullableListFilter>;
  colors?: InputMaybe<StringNullableListFilter>;
  flavorText?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  illustrationId?: InputMaybe<StringNullableFilter>;
  imageUris?: InputMaybe<JsonNullableFilter>;
  layout?: InputMaybe<StringNullableFilter>;
  loyalty?: InputMaybe<StringNullableFilter>;
  manaCost?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  oracleId?: InputMaybe<StringNullableFilter>;
  oracleText?: InputMaybe<StringNullableFilter>;
  power?: InputMaybe<StringNullableFilter>;
  printedName?: InputMaybe<StringNullableFilter>;
  printedText?: InputMaybe<StringNullableFilter>;
  printedTypeLine?: InputMaybe<StringNullableFilter>;
  toughness?: InputMaybe<StringNullableFilter>;
  typeLine?: InputMaybe<StringNullableFilter>;
  watermark?: InputMaybe<StringNullableFilter>;
};

export type ScryfallCardFaceWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardListRelationFilter = {
  every?: InputMaybe<ScryfallCardWhereInput>;
  none?: InputMaybe<ScryfallCardWhereInput>;
  some?: InputMaybe<ScryfallCardWhereInput>;
};

export type ScryfallCardName = {
  __typename?: 'ScryfallCardName';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ScryfallCardNameOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum ScryfallCardNameScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ScryfallCardNameWhereInput = {
  AND?: InputMaybe<Array<ScryfallCardNameWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallCardNameWhereInput>>;
  OR?: InputMaybe<Array<ScryfallCardNameWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ScryfallCardNameWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ScryfallCardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScryfallCardOrderByWithRelationInput = {
  allParts?: InputMaybe<SortOrder>;
  arenaId?: InputMaybe<SortOrder>;
  artist?: InputMaybe<SortOrder>;
  booster?: InputMaybe<SortOrder>;
  borderColor?: InputMaybe<SortOrder>;
  card?: InputMaybe<CardOrderByWithRelationInput>;
  cardBackId?: InputMaybe<SortOrder>;
  cardFaces?: InputMaybe<ScryfallCardFaceOrderByRelationAggregateInput>;
  cardFacesRaw?: InputMaybe<SortOrder>;
  cardmarketId?: InputMaybe<SortOrder>;
  cmc?: InputMaybe<SortOrder>;
  collectorNumber?: InputMaybe<SortOrder>;
  colorIdentity?: InputMaybe<SortOrder>;
  colorIndicator?: InputMaybe<SortOrder>;
  colors?: InputMaybe<SortOrder>;
  contentWarning?: InputMaybe<SortOrder>;
  digital?: InputMaybe<SortOrder>;
  edhrecRank?: InputMaybe<SortOrder>;
  finishes?: InputMaybe<SortOrder>;
  flavorName?: InputMaybe<SortOrder>;
  frame?: InputMaybe<SortOrder>;
  frameEffects?: InputMaybe<SortOrder>;
  fullArt?: InputMaybe<SortOrder>;
  games?: InputMaybe<SortOrder>;
  handModifier?: InputMaybe<SortOrder>;
  highresImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  illustrationId?: InputMaybe<SortOrder>;
  imageStatus?: InputMaybe<SortOrder>;
  imageUris?: InputMaybe<SortOrder>;
  keywords?: InputMaybe<SortOrder>;
  lang?: InputMaybe<SortOrder>;
  layout?: InputMaybe<SortOrder>;
  legalities?: InputMaybe<SortOrder>;
  lifeModifier?: InputMaybe<SortOrder>;
  loyalty?: InputMaybe<SortOrder>;
  manaCost?: InputMaybe<SortOrder>;
  mtgoFoilId?: InputMaybe<SortOrder>;
  mtgoId?: InputMaybe<SortOrder>;
  multiverseIds?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  oracleId?: InputMaybe<SortOrder>;
  oracleText?: InputMaybe<SortOrder>;
  oversized?: InputMaybe<SortOrder>;
  power?: InputMaybe<SortOrder>;
  prices?: InputMaybe<SortOrder>;
  printedName?: InputMaybe<SortOrder>;
  printedText?: InputMaybe<SortOrder>;
  printedTypeLine?: InputMaybe<SortOrder>;
  printsSearchUri?: InputMaybe<SortOrder>;
  producedMana?: InputMaybe<SortOrder>;
  promo?: InputMaybe<SortOrder>;
  promoTypes?: InputMaybe<SortOrder>;
  purchaseUris?: InputMaybe<SortOrder>;
  rarity?: InputMaybe<SortOrder>;
  referencedBy?: InputMaybe<ScryfallRelatedCardOrderByRelationAggregateInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardOrderByRelationAggregateInput>;
  relatedUris?: InputMaybe<SortOrder>;
  releasedAt?: InputMaybe<SortOrder>;
  reprint?: InputMaybe<SortOrder>;
  reserved?: InputMaybe<SortOrder>;
  rulingUri?: InputMaybe<SortOrder>;
  scryfallPrice?: InputMaybe<ScryfallPriceOrderByRelationAggregateInput>;
  scryfallSetUri?: InputMaybe<SortOrder>;
  scryfallUri?: InputMaybe<SortOrder>;
  securityStamp?: InputMaybe<SortOrder>;
  set?: InputMaybe<ScryfallSetOrderByWithRelationInput>;
  setCode?: InputMaybe<SortOrder>;
  setId?: InputMaybe<SortOrder>;
  setName?: InputMaybe<SortOrder>;
  setSearchUri?: InputMaybe<SortOrder>;
  setType?: InputMaybe<SortOrder>;
  setUri?: InputMaybe<SortOrder>;
  storySpotlight?: InputMaybe<SortOrder>;
  tcgplayerEtchedId?: InputMaybe<SortOrder>;
  tcgplayerId?: InputMaybe<SortOrder>;
  textless?: InputMaybe<SortOrder>;
  toughness?: InputMaybe<SortOrder>;
  typeLine?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
  varationOf?: InputMaybe<SortOrder>;
  variation?: InputMaybe<SortOrder>;
  watermark?: InputMaybe<SortOrder>;
};

export type ScryfallCardRelationFilter = {
  is?: InputMaybe<ScryfallCardWhereInput>;
  isNot?: InputMaybe<ScryfallCardWhereInput>;
};

export enum ScryfallCardScalarFieldEnum {
  AllParts = 'allParts',
  ArenaId = 'arenaId',
  Artist = 'artist',
  Booster = 'booster',
  BorderColor = 'borderColor',
  CardBackId = 'cardBackId',
  CardFacesRaw = 'cardFacesRaw',
  CardmarketId = 'cardmarketId',
  Cmc = 'cmc',
  CollectorNumber = 'collectorNumber',
  ColorIdentity = 'colorIdentity',
  ColorIndicator = 'colorIndicator',
  Colors = 'colors',
  ContentWarning = 'contentWarning',
  CreatedAt = 'createdAt',
  Digital = 'digital',
  EdhrecRank = 'edhrecRank',
  Finishes = 'finishes',
  FlavorName = 'flavorName',
  Frame = 'frame',
  FrameEffects = 'frameEffects',
  FullArt = 'fullArt',
  Games = 'games',
  HandModifier = 'handModifier',
  HighresImage = 'highresImage',
  Id = 'id',
  IllustrationId = 'illustrationId',
  ImageStatus = 'imageStatus',
  ImageUris = 'imageUris',
  Keywords = 'keywords',
  Lang = 'lang',
  Layout = 'layout',
  Legalities = 'legalities',
  LifeModifier = 'lifeModifier',
  Loyalty = 'loyalty',
  ManaCost = 'manaCost',
  MtgoFoilId = 'mtgoFoilId',
  MtgoId = 'mtgoId',
  MultiverseIds = 'multiverseIds',
  Name = 'name',
  OracleId = 'oracleId',
  OracleText = 'oracleText',
  Oversized = 'oversized',
  Power = 'power',
  Prices = 'prices',
  PrintedName = 'printedName',
  PrintedText = 'printedText',
  PrintedTypeLine = 'printedTypeLine',
  PrintsSearchUri = 'printsSearchUri',
  ProducedMana = 'producedMana',
  Promo = 'promo',
  PromoTypes = 'promoTypes',
  PurchaseUris = 'purchaseUris',
  Rarity = 'rarity',
  RelatedUris = 'relatedUris',
  ReleasedAt = 'releasedAt',
  Reprint = 'reprint',
  Reserved = 'reserved',
  RulingUri = 'rulingUri',
  ScryfallSetUri = 'scryfallSetUri',
  ScryfallUri = 'scryfallUri',
  SecurityStamp = 'securityStamp',
  SetCode = 'setCode',
  SetId = 'setId',
  SetName = 'setName',
  SetSearchUri = 'setSearchUri',
  SetType = 'setType',
  SetUri = 'setUri',
  StorySpotlight = 'storySpotlight',
  TcgplayerEtchedId = 'tcgplayerEtchedId',
  TcgplayerId = 'tcgplayerId',
  Textless = 'textless',
  Toughness = 'toughness',
  TypeLine = 'typeLine',
  UpdatedAt = 'updatedAt',
  Uri = 'uri',
  VarationOf = 'varationOf',
  Variation = 'variation',
  Watermark = 'watermark'
}

export type ScryfallCardUpdateOneRequiredWithoutCardInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutCardInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutCardInput>;
  update?: InputMaybe<ScryfallCardUpdateWithoutCardInput>;
  upsert?: InputMaybe<ScryfallCardUpsertWithoutCardInput>;
};

export type ScryfallCardUpdateOneRequiredWithoutReferencedByInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutReferencedByInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutReferencedByInput>;
  update?: InputMaybe<ScryfallCardUpdateWithoutReferencedByInput>;
  upsert?: InputMaybe<ScryfallCardUpsertWithoutReferencedByInput>;
};

export type ScryfallCardUpdateOneRequiredWithoutRelatedToInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutRelatedToInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutRelatedToInput>;
  update?: InputMaybe<ScryfallCardUpdateWithoutRelatedToInput>;
  upsert?: InputMaybe<ScryfallCardUpsertWithoutRelatedToInput>;
};

export type ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput = {
  connect?: InputMaybe<ScryfallCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallCardCreateOrConnectWithoutScryfallPriceInput>;
  create?: InputMaybe<ScryfallCardCreateWithoutScryfallPriceInput>;
  update?: InputMaybe<ScryfallCardUpdateWithoutScryfallPriceInput>;
  upsert?: InputMaybe<ScryfallCardUpsertWithoutScryfallPriceInput>;
};

export type ScryfallCardUpdateWithoutCardInput = {
  allParts?: InputMaybe<ScryfallCardUpdateallPartsInput>;
  arenaId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  borderColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  cardBackId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cardFaces?: InputMaybe<ScryfallCardFaceUpdateManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardUpdatecardFacesRawInput>;
  cardmarketId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  collectorNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  colorIdentity?: InputMaybe<ScryfallCardUpdatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardUpdatecolorsInput>;
  contentWarning?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  digital?: InputMaybe<BoolFieldUpdateOperationsInput>;
  edhrecRank?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  finishes?: InputMaybe<ScryfallCardUpdatefinishesInput>;
  flavorName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  frame?: InputMaybe<StringFieldUpdateOperationsInput>;
  frameEffects?: InputMaybe<ScryfallCardUpdateframeEffectsInput>;
  fullArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  games?: InputMaybe<ScryfallCardUpdategamesInput>;
  handModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  highresImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardUpdatekeywordsInput>;
  lang?: InputMaybe<StringFieldUpdateOperationsInput>;
  layout?: InputMaybe<StringFieldUpdateOperationsInput>;
  legalities?: InputMaybe<Scalars['JSON']>;
  lifeModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mtgoFoilId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mtgoId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  multiverseIds?: InputMaybe<ScryfallCardUpdatemultiverseIdsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oversized?: InputMaybe<BoolFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  prices?: InputMaybe<Scalars['JSON']>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printsSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  producedMana?: InputMaybe<ScryfallCardUpdateproducedManaInput>;
  promo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  promoTypes?: InputMaybe<ScryfallCardUpdatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  referencedBy?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutReferenceInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutCardInput>;
  relatedUris?: InputMaybe<Scalars['JSON']>;
  releasedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reprint?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reserved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rulingUri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scryfallPrice?: InputMaybe<ScryfallPriceUpdateManyWithoutCardInput>;
  scryfallSetUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  securityStamp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  set?: InputMaybe<ScryfallSetUpdateOneRequiredWithoutCardsInput>;
  setCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  setName?: InputMaybe<StringFieldUpdateOperationsInput>;
  setSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  setType?: InputMaybe<StringFieldUpdateOperationsInput>;
  setUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  storySpotlight?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tcgplayerEtchedId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tcgplayerId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  textless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
  varationOf?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  variation?: InputMaybe<BoolFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardUpdateWithoutReferencedByInput = {
  allParts?: InputMaybe<ScryfallCardUpdateallPartsInput>;
  arenaId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  borderColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  card?: InputMaybe<CardUpdateOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cardFaces?: InputMaybe<ScryfallCardFaceUpdateManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardUpdatecardFacesRawInput>;
  cardmarketId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  collectorNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  colorIdentity?: InputMaybe<ScryfallCardUpdatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardUpdatecolorsInput>;
  contentWarning?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  digital?: InputMaybe<BoolFieldUpdateOperationsInput>;
  edhrecRank?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  finishes?: InputMaybe<ScryfallCardUpdatefinishesInput>;
  flavorName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  frame?: InputMaybe<StringFieldUpdateOperationsInput>;
  frameEffects?: InputMaybe<ScryfallCardUpdateframeEffectsInput>;
  fullArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  games?: InputMaybe<ScryfallCardUpdategamesInput>;
  handModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  highresImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardUpdatekeywordsInput>;
  lang?: InputMaybe<StringFieldUpdateOperationsInput>;
  layout?: InputMaybe<StringFieldUpdateOperationsInput>;
  legalities?: InputMaybe<Scalars['JSON']>;
  lifeModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mtgoFoilId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mtgoId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  multiverseIds?: InputMaybe<ScryfallCardUpdatemultiverseIdsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oversized?: InputMaybe<BoolFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  prices?: InputMaybe<Scalars['JSON']>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printsSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  producedMana?: InputMaybe<ScryfallCardUpdateproducedManaInput>;
  promo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  promoTypes?: InputMaybe<ScryfallCardUpdatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutCardInput>;
  relatedUris?: InputMaybe<Scalars['JSON']>;
  releasedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reprint?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reserved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rulingUri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scryfallPrice?: InputMaybe<ScryfallPriceUpdateManyWithoutCardInput>;
  scryfallSetUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  securityStamp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  set?: InputMaybe<ScryfallSetUpdateOneRequiredWithoutCardsInput>;
  setCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  setName?: InputMaybe<StringFieldUpdateOperationsInput>;
  setSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  setType?: InputMaybe<StringFieldUpdateOperationsInput>;
  setUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  storySpotlight?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tcgplayerEtchedId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tcgplayerId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  textless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
  varationOf?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  variation?: InputMaybe<BoolFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardUpdateWithoutRelatedToInput = {
  allParts?: InputMaybe<ScryfallCardUpdateallPartsInput>;
  arenaId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  borderColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  card?: InputMaybe<CardUpdateOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cardFaces?: InputMaybe<ScryfallCardFaceUpdateManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardUpdatecardFacesRawInput>;
  cardmarketId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  collectorNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  colorIdentity?: InputMaybe<ScryfallCardUpdatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardUpdatecolorsInput>;
  contentWarning?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  digital?: InputMaybe<BoolFieldUpdateOperationsInput>;
  edhrecRank?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  finishes?: InputMaybe<ScryfallCardUpdatefinishesInput>;
  flavorName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  frame?: InputMaybe<StringFieldUpdateOperationsInput>;
  frameEffects?: InputMaybe<ScryfallCardUpdateframeEffectsInput>;
  fullArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  games?: InputMaybe<ScryfallCardUpdategamesInput>;
  handModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  highresImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardUpdatekeywordsInput>;
  lang?: InputMaybe<StringFieldUpdateOperationsInput>;
  layout?: InputMaybe<StringFieldUpdateOperationsInput>;
  legalities?: InputMaybe<Scalars['JSON']>;
  lifeModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mtgoFoilId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mtgoId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  multiverseIds?: InputMaybe<ScryfallCardUpdatemultiverseIdsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oversized?: InputMaybe<BoolFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  prices?: InputMaybe<Scalars['JSON']>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printsSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  producedMana?: InputMaybe<ScryfallCardUpdateproducedManaInput>;
  promo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  promoTypes?: InputMaybe<ScryfallCardUpdatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  referencedBy?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutReferenceInput>;
  relatedUris?: InputMaybe<Scalars['JSON']>;
  releasedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reprint?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reserved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rulingUri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scryfallPrice?: InputMaybe<ScryfallPriceUpdateManyWithoutCardInput>;
  scryfallSetUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  securityStamp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  set?: InputMaybe<ScryfallSetUpdateOneRequiredWithoutCardsInput>;
  setCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  setName?: InputMaybe<StringFieldUpdateOperationsInput>;
  setSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  setType?: InputMaybe<StringFieldUpdateOperationsInput>;
  setUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  storySpotlight?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tcgplayerEtchedId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tcgplayerId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  textless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
  varationOf?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  variation?: InputMaybe<BoolFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardUpdateWithoutScryfallPriceInput = {
  allParts?: InputMaybe<ScryfallCardUpdateallPartsInput>;
  arenaId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  artist?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booster?: InputMaybe<BoolFieldUpdateOperationsInput>;
  borderColor?: InputMaybe<StringFieldUpdateOperationsInput>;
  card?: InputMaybe<CardUpdateOneWithoutScryfallCardInput>;
  cardBackId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cardFaces?: InputMaybe<ScryfallCardFaceUpdateManyWithoutCardInput>;
  cardFacesRaw?: InputMaybe<ScryfallCardUpdatecardFacesRawInput>;
  cardmarketId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cmc?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  collectorNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  colorIdentity?: InputMaybe<ScryfallCardUpdatecolorIdentityInput>;
  colorIndicator?: InputMaybe<ScryfallCardUpdatecolorIndicatorInput>;
  colors?: InputMaybe<ScryfallCardUpdatecolorsInput>;
  contentWarning?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  digital?: InputMaybe<BoolFieldUpdateOperationsInput>;
  edhrecRank?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  finishes?: InputMaybe<ScryfallCardUpdatefinishesInput>;
  flavorName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  frame?: InputMaybe<StringFieldUpdateOperationsInput>;
  frameEffects?: InputMaybe<ScryfallCardUpdateframeEffectsInput>;
  fullArt?: InputMaybe<BoolFieldUpdateOperationsInput>;
  games?: InputMaybe<ScryfallCardUpdategamesInput>;
  handModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  highresImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  illustrationId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageStatus?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUris?: InputMaybe<Scalars['JSON']>;
  keywords?: InputMaybe<ScryfallCardUpdatekeywordsInput>;
  lang?: InputMaybe<StringFieldUpdateOperationsInput>;
  layout?: InputMaybe<StringFieldUpdateOperationsInput>;
  legalities?: InputMaybe<Scalars['JSON']>;
  lifeModifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  loyalty?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manaCost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mtgoFoilId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mtgoId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  multiverseIds?: InputMaybe<ScryfallCardUpdatemultiverseIdsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  oracleId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oracleText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oversized?: InputMaybe<BoolFieldUpdateOperationsInput>;
  power?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  prices?: InputMaybe<Scalars['JSON']>;
  printedName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedText?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedTypeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printsSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  producedMana?: InputMaybe<ScryfallCardUpdateproducedManaInput>;
  promo?: InputMaybe<BoolFieldUpdateOperationsInput>;
  promoTypes?: InputMaybe<ScryfallCardUpdatepromoTypesInput>;
  purchaseUris?: InputMaybe<Scalars['JSON']>;
  rarity?: InputMaybe<StringFieldUpdateOperationsInput>;
  referencedBy?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutReferenceInput>;
  relatedTo?: InputMaybe<ScryfallRelatedCardUpdateManyWithoutCardInput>;
  relatedUris?: InputMaybe<Scalars['JSON']>;
  releasedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reprint?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reserved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rulingUri?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scryfallSetUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  scryfallUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  securityStamp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  set?: InputMaybe<ScryfallSetUpdateOneRequiredWithoutCardsInput>;
  setCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  setName?: InputMaybe<StringFieldUpdateOperationsInput>;
  setSearchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  setType?: InputMaybe<StringFieldUpdateOperationsInput>;
  setUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  storySpotlight?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tcgplayerEtchedId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tcgplayerId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  textless?: InputMaybe<BoolFieldUpdateOperationsInput>;
  toughness?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
  varationOf?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  variation?: InputMaybe<BoolFieldUpdateOperationsInput>;
  watermark?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ScryfallCardUpdateallPartsInput = {
  push?: InputMaybe<Array<Scalars['JSON']>>;
  set?: InputMaybe<Array<Scalars['JSON']>>;
};

export type ScryfallCardUpdatecardFacesRawInput = {
  push?: InputMaybe<Array<Scalars['JSON']>>;
  set?: InputMaybe<Array<Scalars['JSON']>>;
};

export type ScryfallCardUpdatecolorIdentityInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatecolorIndicatorInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatecolorsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatefinishesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdateframeEffectsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdategamesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatekeywordsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatemultiverseIdsInput = {
  push?: InputMaybe<Array<Scalars['Int']>>;
  set?: InputMaybe<Array<Scalars['Int']>>;
};

export type ScryfallCardUpdateproducedManaInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpdatepromoTypesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type ScryfallCardUpsertWithoutCardInput = {
  create: ScryfallCardCreateWithoutCardInput;
  update: ScryfallCardUpdateWithoutCardInput;
};

export type ScryfallCardUpsertWithoutReferencedByInput = {
  create: ScryfallCardCreateWithoutReferencedByInput;
  update: ScryfallCardUpdateWithoutReferencedByInput;
};

export type ScryfallCardUpsertWithoutRelatedToInput = {
  create: ScryfallCardCreateWithoutRelatedToInput;
  update: ScryfallCardUpdateWithoutRelatedToInput;
};

export type ScryfallCardUpsertWithoutScryfallPriceInput = {
  create: ScryfallCardCreateWithoutScryfallPriceInput;
  update: ScryfallCardUpdateWithoutScryfallPriceInput;
};

export type ScryfallCardWhereInput = {
  AND?: InputMaybe<Array<ScryfallCardWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallCardWhereInput>>;
  OR?: InputMaybe<Array<ScryfallCardWhereInput>>;
  allParts?: InputMaybe<JsonNullableListFilter>;
  arenaId?: InputMaybe<IntNullableFilter>;
  artist?: InputMaybe<StringNullableFilter>;
  booster?: InputMaybe<BoolFilter>;
  borderColor?: InputMaybe<StringFilter>;
  card?: InputMaybe<CardRelationFilter>;
  cardBackId?: InputMaybe<StringNullableFilter>;
  cardFaces?: InputMaybe<ScryfallCardFaceListRelationFilter>;
  cardFacesRaw?: InputMaybe<JsonNullableListFilter>;
  cardmarketId?: InputMaybe<IntNullableFilter>;
  cmc?: InputMaybe<FloatNullableFilter>;
  collectorNumber?: InputMaybe<StringFilter>;
  colorIdentity?: InputMaybe<StringNullableListFilter>;
  colorIndicator?: InputMaybe<StringNullableListFilter>;
  colors?: InputMaybe<StringNullableListFilter>;
  contentWarning?: InputMaybe<BoolNullableFilter>;
  digital?: InputMaybe<BoolFilter>;
  edhrecRank?: InputMaybe<IntNullableFilter>;
  finishes?: InputMaybe<StringNullableListFilter>;
  flavorName?: InputMaybe<StringNullableFilter>;
  frame?: InputMaybe<StringFilter>;
  frameEffects?: InputMaybe<StringNullableListFilter>;
  fullArt?: InputMaybe<BoolFilter>;
  games?: InputMaybe<StringNullableListFilter>;
  handModifier?: InputMaybe<StringNullableFilter>;
  highresImage?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  illustrationId?: InputMaybe<StringNullableFilter>;
  imageStatus?: InputMaybe<StringFilter>;
  imageUris?: InputMaybe<JsonNullableFilter>;
  keywords?: InputMaybe<StringNullableListFilter>;
  lang?: InputMaybe<StringFilter>;
  layout?: InputMaybe<StringFilter>;
  legalities?: InputMaybe<JsonFilter>;
  lifeModifier?: InputMaybe<StringNullableFilter>;
  loyalty?: InputMaybe<StringNullableFilter>;
  manaCost?: InputMaybe<StringNullableFilter>;
  mtgoFoilId?: InputMaybe<IntNullableFilter>;
  mtgoId?: InputMaybe<IntNullableFilter>;
  multiverseIds?: InputMaybe<IntNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  oracleId?: InputMaybe<StringNullableFilter>;
  oracleText?: InputMaybe<StringNullableFilter>;
  oversized?: InputMaybe<BoolFilter>;
  power?: InputMaybe<StringNullableFilter>;
  prices?: InputMaybe<JsonFilter>;
  printedName?: InputMaybe<StringNullableFilter>;
  printedText?: InputMaybe<StringNullableFilter>;
  printedTypeLine?: InputMaybe<StringNullableFilter>;
  printsSearchUri?: InputMaybe<StringFilter>;
  producedMana?: InputMaybe<StringNullableListFilter>;
  promo?: InputMaybe<BoolFilter>;
  promoTypes?: InputMaybe<StringNullableListFilter>;
  purchaseUris?: InputMaybe<JsonNullableFilter>;
  rarity?: InputMaybe<StringFilter>;
  referencedBy?: InputMaybe<ScryfallRelatedCardListRelationFilter>;
  relatedTo?: InputMaybe<ScryfallRelatedCardListRelationFilter>;
  relatedUris?: InputMaybe<JsonFilter>;
  releasedAt?: InputMaybe<DateTimeFilter>;
  reprint?: InputMaybe<BoolFilter>;
  reserved?: InputMaybe<BoolFilter>;
  rulingUri?: InputMaybe<StringNullableFilter>;
  scryfallPrice?: InputMaybe<ScryfallPriceListRelationFilter>;
  scryfallSetUri?: InputMaybe<StringFilter>;
  scryfallUri?: InputMaybe<StringFilter>;
  securityStamp?: InputMaybe<StringNullableFilter>;
  set?: InputMaybe<ScryfallSetRelationFilter>;
  setCode?: InputMaybe<StringFilter>;
  setId?: InputMaybe<StringFilter>;
  setName?: InputMaybe<StringFilter>;
  setSearchUri?: InputMaybe<StringFilter>;
  setType?: InputMaybe<StringFilter>;
  setUri?: InputMaybe<StringFilter>;
  storySpotlight?: InputMaybe<BoolFilter>;
  tcgplayerEtchedId?: InputMaybe<IntNullableFilter>;
  tcgplayerId?: InputMaybe<IntNullableFilter>;
  textless?: InputMaybe<BoolFilter>;
  toughness?: InputMaybe<StringNullableFilter>;
  typeLine?: InputMaybe<StringNullableFilter>;
  uri?: InputMaybe<StringFilter>;
  varationOf?: InputMaybe<StringNullableFilter>;
  variation?: InputMaybe<BoolFilter>;
  watermark?: InputMaybe<StringNullableFilter>;
};

export type ScryfallCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ScryfallPrice = {
  __typename?: 'ScryfallPrice';
  card: ScryfallCard;
  cardId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currentPriceOfCard?: Maybe<Card>;
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  tix?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceAvgAggregate = {
  __typename?: 'ScryfallPriceAvgAggregate';
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  tix?: Maybe<Scalars['Float']>;
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceAvgAggregateInput = {
  eur?: InputMaybe<Scalars['Boolean']>;
  eurFoil?: InputMaybe<Scalars['Boolean']>;
  tix?: InputMaybe<Scalars['Boolean']>;
  usd?: InputMaybe<Scalars['Boolean']>;
  usdEtched?: InputMaybe<Scalars['Boolean']>;
  usdFoil?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceAvgOrderByAggregateInput = {
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceCountAggregate = {
  __typename?: 'ScryfallPriceCountAggregate';
  _all: Scalars['Int'];
  cardId: Scalars['Int'];
  createdAt: Scalars['Int'];
  currentPriceOfCardId: Scalars['Int'];
  date: Scalars['Int'];
  eur: Scalars['Int'];
  eurFoil: Scalars['Int'];
  id: Scalars['Int'];
  tix: Scalars['Int'];
  updatedAt: Scalars['Int'];
  usd: Scalars['Int'];
  usdEtched: Scalars['Int'];
  usdFoil: Scalars['Int'];
};

export type ScryfallPriceCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']>;
  cardId?: InputMaybe<Scalars['Boolean']>;
  currentPriceOfCardId?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['Boolean']>;
  eur?: InputMaybe<Scalars['Boolean']>;
  eurFoil?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Boolean']>;
  tix?: InputMaybe<Scalars['Boolean']>;
  usd?: InputMaybe<Scalars['Boolean']>;
  usdEtched?: InputMaybe<Scalars['Boolean']>;
  usdFoil?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceCountOrderByAggregateInput = {
  cardId?: InputMaybe<SortOrder>;
  currentPriceOfCardId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceCreateManyCardInput = {
  currentPriceOfCardId?: InputMaybe<Scalars['String']>;
  date: Scalars['DateTime'];
  eur?: InputMaybe<Scalars['Float']>;
  eurFoil?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  tix?: InputMaybe<Scalars['Float']>;
  usd?: InputMaybe<Scalars['Float']>;
  usdEtched?: InputMaybe<Scalars['Float']>;
  usdFoil?: InputMaybe<Scalars['Float']>;
};

export type ScryfallPriceCreateManyCardInputEnvelope = {
  data: Array<ScryfallPriceCreateManyCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceCreateNestedManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallPriceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallPriceCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallPriceCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallPriceCreateManyCardInputEnvelope>;
};

export type ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput = {
  connect?: InputMaybe<ScryfallPriceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput>;
  create?: InputMaybe<ScryfallPriceCreateWithoutCurrentPriceOfCardInput>;
};

export type ScryfallPriceCreateOrConnectWithoutCardInput = {
  create: ScryfallPriceCreateWithoutCardInput;
  where: ScryfallPriceWhereUniqueInput;
};

export type ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput = {
  create: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;
  where: ScryfallPriceWhereUniqueInput;
};

export type ScryfallPriceCreateWithoutCardInput = {
  currentPriceOfCard?: InputMaybe<CardCreateNestedOneWithoutCurrentPriceInput>;
  date: Scalars['DateTime'];
  eur?: InputMaybe<Scalars['Float']>;
  eurFoil?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  tix?: InputMaybe<Scalars['Float']>;
  usd?: InputMaybe<Scalars['Float']>;
  usdEtched?: InputMaybe<Scalars['Float']>;
  usdFoil?: InputMaybe<Scalars['Float']>;
};

export type ScryfallPriceCreateWithoutCurrentPriceOfCardInput = {
  card: ScryfallCardCreateNestedOneWithoutScryfallPriceInput;
  date: Scalars['DateTime'];
  eur?: InputMaybe<Scalars['Float']>;
  eurFoil?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  tix?: InputMaybe<Scalars['Float']>;
  usd?: InputMaybe<Scalars['Float']>;
  usdEtched?: InputMaybe<Scalars['Float']>;
  usdFoil?: InputMaybe<Scalars['Float']>;
};

export type ScryfallPriceGroupBy = {
  __typename?: 'ScryfallPriceGroupBy';
  _avg?: Maybe<ScryfallPriceAvgAggregate>;
  _count?: Maybe<ScryfallPriceCountAggregate>;
  _max?: Maybe<ScryfallPriceMaxAggregate>;
  _min?: Maybe<ScryfallPriceMinAggregate>;
  _sum?: Maybe<ScryfallPriceSumAggregate>;
  cardId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  tix?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceListRelationFilter = {
  every?: InputMaybe<ScryfallPriceWhereInput>;
  none?: InputMaybe<ScryfallPriceWhereInput>;
  some?: InputMaybe<ScryfallPriceWhereInput>;
};

export type ScryfallPriceMaxAggregate = {
  __typename?: 'ScryfallPriceMaxAggregate';
  cardId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  tix?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceMaxAggregateInput = {
  cardId?: InputMaybe<Scalars['Boolean']>;
  currentPriceOfCardId?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['Boolean']>;
  eur?: InputMaybe<Scalars['Boolean']>;
  eurFoil?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Boolean']>;
  tix?: InputMaybe<Scalars['Boolean']>;
  usd?: InputMaybe<Scalars['Boolean']>;
  usdEtched?: InputMaybe<Scalars['Boolean']>;
  usdFoil?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceMaxOrderByAggregateInput = {
  cardId?: InputMaybe<SortOrder>;
  currentPriceOfCardId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceMinAggregate = {
  __typename?: 'ScryfallPriceMinAggregate';
  cardId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  tix?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceMinAggregateInput = {
  cardId?: InputMaybe<Scalars['Boolean']>;
  currentPriceOfCardId?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['Boolean']>;
  eur?: InputMaybe<Scalars['Boolean']>;
  eurFoil?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Boolean']>;
  tix?: InputMaybe<Scalars['Boolean']>;
  usd?: InputMaybe<Scalars['Boolean']>;
  usdEtched?: InputMaybe<Scalars['Boolean']>;
  usdFoil?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceMinOrderByAggregateInput = {
  cardId?: InputMaybe<SortOrder>;
  currentPriceOfCardId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScryfallPriceOrderByWithAggregationInput = {
  _avg?: InputMaybe<ScryfallPriceAvgOrderByAggregateInput>;
  _count?: InputMaybe<ScryfallPriceCountOrderByAggregateInput>;
  _max?: InputMaybe<ScryfallPriceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ScryfallPriceMinOrderByAggregateInput>;
  _sum?: InputMaybe<ScryfallPriceSumOrderByAggregateInput>;
  cardId?: InputMaybe<SortOrder>;
  currentPriceOfCardId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceOrderByWithRelationInput = {
  card?: InputMaybe<ScryfallCardOrderByWithRelationInput>;
  cardId?: InputMaybe<SortOrder>;
  currentPriceOfCard?: InputMaybe<CardOrderByWithRelationInput>;
  currentPriceOfCardId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceRelationFilter = {
  is?: InputMaybe<ScryfallPriceWhereInput>;
  isNot?: InputMaybe<ScryfallPriceWhereInput>;
};

export enum ScryfallPriceScalarFieldEnum {
  CardId = 'cardId',
  CreatedAt = 'createdAt',
  CurrentPriceOfCardId = 'currentPriceOfCardId',
  Date = 'date',
  Eur = 'eur',
  EurFoil = 'eurFoil',
  Id = 'id',
  Tix = 'tix',
  UpdatedAt = 'updatedAt',
  Usd = 'usd',
  UsdEtched = 'usdEtched',
  UsdFoil = 'usdFoil'
}

export type ScryfallPriceScalarWhereInput = {
  AND?: InputMaybe<Array<ScryfallPriceScalarWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallPriceScalarWhereInput>>;
  OR?: InputMaybe<Array<ScryfallPriceScalarWhereInput>>;
  cardId?: InputMaybe<StringFilter>;
  currentPriceOfCardId?: InputMaybe<StringNullableFilter>;
  date?: InputMaybe<DateTimeFilter>;
  eur?: InputMaybe<FloatNullableFilter>;
  eurFoil?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tix?: InputMaybe<FloatNullableFilter>;
  usd?: InputMaybe<FloatNullableFilter>;
  usdEtched?: InputMaybe<FloatNullableFilter>;
  usdFoil?: InputMaybe<FloatNullableFilter>;
};

export type ScryfallPriceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ScryfallPriceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ScryfallPriceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ScryfallPriceScalarWhereWithAggregatesInput>>;
  cardId?: InputMaybe<StringWithAggregatesFilter>;
  currentPriceOfCardId?: InputMaybe<StringNullableWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  eur?: InputMaybe<FloatNullableWithAggregatesFilter>;
  eurFoil?: InputMaybe<FloatNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  tix?: InputMaybe<FloatNullableWithAggregatesFilter>;
  usd?: InputMaybe<FloatNullableWithAggregatesFilter>;
  usdEtched?: InputMaybe<FloatNullableWithAggregatesFilter>;
  usdFoil?: InputMaybe<FloatNullableWithAggregatesFilter>;
};

export type ScryfallPriceSumAggregate = {
  __typename?: 'ScryfallPriceSumAggregate';
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  tix?: Maybe<Scalars['Float']>;
  usd?: Maybe<Scalars['Float']>;
  usdEtched?: Maybe<Scalars['Float']>;
  usdFoil?: Maybe<Scalars['Float']>;
};

export type ScryfallPriceSumAggregateInput = {
  eur?: InputMaybe<Scalars['Boolean']>;
  eurFoil?: InputMaybe<Scalars['Boolean']>;
  tix?: InputMaybe<Scalars['Boolean']>;
  usd?: InputMaybe<Scalars['Boolean']>;
  usdEtched?: InputMaybe<Scalars['Boolean']>;
  usdFoil?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallPriceSumOrderByAggregateInput = {
  eur?: InputMaybe<SortOrder>;
  eurFoil?: InputMaybe<SortOrder>;
  tix?: InputMaybe<SortOrder>;
  usd?: InputMaybe<SortOrder>;
  usdEtched?: InputMaybe<SortOrder>;
  usdFoil?: InputMaybe<SortOrder>;
};

export type ScryfallPriceUpdateManyMutationInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eur?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  eurFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tix?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usd?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdEtched?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type ScryfallPriceUpdateManyWithWhereWithoutCardInput = {
  data: ScryfallPriceUpdateManyMutationInput;
  where: ScryfallPriceScalarWhereInput;
};

export type ScryfallPriceUpdateManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallPriceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallPriceCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallPriceCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallPriceCreateManyCardInputEnvelope>;
  delete?: InputMaybe<Array<ScryfallPriceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScryfallPriceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScryfallPriceWhereUniqueInput>>;
  set?: InputMaybe<Array<ScryfallPriceWhereUniqueInput>>;
  update?: InputMaybe<Array<ScryfallPriceUpdateWithWhereUniqueWithoutCardInput>>;
  updateMany?: InputMaybe<Array<ScryfallPriceUpdateManyWithWhereWithoutCardInput>>;
  upsert?: InputMaybe<Array<ScryfallPriceUpsertWithWhereUniqueWithoutCardInput>>;
};

export type ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput = {
  connect?: InputMaybe<ScryfallPriceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput>;
  create?: InputMaybe<ScryfallPriceCreateWithoutCurrentPriceOfCardInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ScryfallPriceUpdateWithoutCurrentPriceOfCardInput>;
  upsert?: InputMaybe<ScryfallPriceUpsertWithoutCurrentPriceOfCardInput>;
};

export type ScryfallPriceUpdateWithWhereUniqueWithoutCardInput = {
  data: ScryfallPriceUpdateWithoutCardInput;
  where: ScryfallPriceWhereUniqueInput;
};

export type ScryfallPriceUpdateWithoutCardInput = {
  currentPriceOfCard?: InputMaybe<CardUpdateOneWithoutCurrentPriceInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eur?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  eurFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tix?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usd?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdEtched?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type ScryfallPriceUpdateWithoutCurrentPriceOfCardInput = {
  card?: InputMaybe<ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eur?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  eurFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tix?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usd?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdEtched?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  usdFoil?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type ScryfallPriceUpsertWithWhereUniqueWithoutCardInput = {
  create: ScryfallPriceCreateWithoutCardInput;
  update: ScryfallPriceUpdateWithoutCardInput;
  where: ScryfallPriceWhereUniqueInput;
};

export type ScryfallPriceUpsertWithoutCurrentPriceOfCardInput = {
  create: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;
  update: ScryfallPriceUpdateWithoutCurrentPriceOfCardInput;
};

export type ScryfallPriceWhereInput = {
  AND?: InputMaybe<Array<ScryfallPriceWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallPriceWhereInput>>;
  OR?: InputMaybe<Array<ScryfallPriceWhereInput>>;
  card?: InputMaybe<ScryfallCardRelationFilter>;
  cardId?: InputMaybe<StringFilter>;
  currentPriceOfCard?: InputMaybe<CardRelationFilter>;
  currentPriceOfCardId?: InputMaybe<StringNullableFilter>;
  date?: InputMaybe<DateTimeFilter>;
  eur?: InputMaybe<FloatNullableFilter>;
  eurFoil?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tix?: InputMaybe<FloatNullableFilter>;
  usd?: InputMaybe<FloatNullableFilter>;
  usdEtched?: InputMaybe<FloatNullableFilter>;
  usdFoil?: InputMaybe<FloatNullableFilter>;
};

export type ScryfallPriceWhereUniqueInput = {
  currentPriceOfCardId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ScryfallRelatedCard = {
  __typename?: 'ScryfallRelatedCard';
  card: Array<ScryfallCard>;
  cardId: Scalars['String'];
  component: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  reference: Array<ScryfallCard>;
  referenceId: Scalars['String'];
  typeLine: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  uri: Scalars['String'];
};

export type ScryfallRelatedCardCreateManyCardInput = {
  component: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  referenceId: Scalars['String'];
  typeLine: Scalars['String'];
  uri: Scalars['String'];
};

export type ScryfallRelatedCardCreateManyCardInputEnvelope = {
  data: Array<ScryfallRelatedCardCreateManyCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallRelatedCardCreateManyReferenceInput = {
  cardId: Scalars['String'];
  component: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  typeLine: Scalars['String'];
  uri: Scalars['String'];
};

export type ScryfallRelatedCardCreateManyReferenceInputEnvelope = {
  data: Array<ScryfallRelatedCardCreateManyReferenceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ScryfallRelatedCardCreateNestedManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallRelatedCardCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallRelatedCardCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallRelatedCardCreateManyCardInputEnvelope>;
};

export type ScryfallRelatedCardCreateNestedManyWithoutReferenceInput = {
  connect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallRelatedCardCreateOrConnectWithoutReferenceInput>>;
  create?: InputMaybe<Array<ScryfallRelatedCardCreateWithoutReferenceInput>>;
  createMany?: InputMaybe<ScryfallRelatedCardCreateManyReferenceInputEnvelope>;
};

export type ScryfallRelatedCardCreateOrConnectWithoutCardInput = {
  create: ScryfallRelatedCardCreateWithoutCardInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardCreateOrConnectWithoutReferenceInput = {
  create: ScryfallRelatedCardCreateWithoutReferenceInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardCreateWithoutCardInput = {
  component: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  reference: ScryfallCardCreateNestedOneWithoutReferencedByInput;
  typeLine: Scalars['String'];
  uri: Scalars['String'];
};

export type ScryfallRelatedCardCreateWithoutReferenceInput = {
  card: ScryfallCardCreateNestedOneWithoutRelatedToInput;
  component: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  typeLine: Scalars['String'];
  uri: Scalars['String'];
};

export type ScryfallRelatedCardListRelationFilter = {
  every?: InputMaybe<ScryfallRelatedCardWhereInput>;
  none?: InputMaybe<ScryfallRelatedCardWhereInput>;
  some?: InputMaybe<ScryfallRelatedCardWhereInput>;
};

export type ScryfallRelatedCardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScryfallRelatedCardScalarWhereInput = {
  AND?: InputMaybe<Array<ScryfallRelatedCardScalarWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallRelatedCardScalarWhereInput>>;
  OR?: InputMaybe<Array<ScryfallRelatedCardScalarWhereInput>>;
  cardId?: InputMaybe<StringFilter>;
  component?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  referenceId?: InputMaybe<StringFilter>;
  typeLine?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringFilter>;
};

export type ScryfallRelatedCardUpdateManyMutationInput = {
  component?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<StringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScryfallRelatedCardUpdateManyWithWhereWithoutCardInput = {
  data: ScryfallRelatedCardUpdateManyMutationInput;
  where: ScryfallRelatedCardScalarWhereInput;
};

export type ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput = {
  data: ScryfallRelatedCardUpdateManyMutationInput;
  where: ScryfallRelatedCardScalarWhereInput;
};

export type ScryfallRelatedCardUpdateManyWithoutCardInput = {
  connect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallRelatedCardCreateOrConnectWithoutCardInput>>;
  create?: InputMaybe<Array<ScryfallRelatedCardCreateWithoutCardInput>>;
  createMany?: InputMaybe<ScryfallRelatedCardCreateManyCardInputEnvelope>;
  delete?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScryfallRelatedCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  set?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  update?: InputMaybe<Array<ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput>>;
  updateMany?: InputMaybe<Array<ScryfallRelatedCardUpdateManyWithWhereWithoutCardInput>>;
  upsert?: InputMaybe<Array<ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput>>;
};

export type ScryfallRelatedCardUpdateManyWithoutReferenceInput = {
  connect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScryfallRelatedCardCreateOrConnectWithoutReferenceInput>>;
  create?: InputMaybe<Array<ScryfallRelatedCardCreateWithoutReferenceInput>>;
  createMany?: InputMaybe<ScryfallRelatedCardCreateManyReferenceInputEnvelope>;
  delete?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScryfallRelatedCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  set?: InputMaybe<Array<ScryfallRelatedCardWhereUniqueInput>>;
  update?: InputMaybe<Array<ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput>>;
  updateMany?: InputMaybe<Array<ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput>>;
  upsert?: InputMaybe<Array<ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput>>;
};

export type ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput = {
  data: ScryfallRelatedCardUpdateWithoutCardInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput = {
  data: ScryfallRelatedCardUpdateWithoutReferenceInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardUpdateWithoutCardInput = {
  component?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reference?: InputMaybe<ScryfallCardUpdateOneRequiredWithoutReferencedByInput>;
  typeLine?: InputMaybe<StringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScryfallRelatedCardUpdateWithoutReferenceInput = {
  card?: InputMaybe<ScryfallCardUpdateOneRequiredWithoutRelatedToInput>;
  component?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  typeLine?: InputMaybe<StringFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput = {
  create: ScryfallRelatedCardCreateWithoutCardInput;
  update: ScryfallRelatedCardUpdateWithoutCardInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput = {
  create: ScryfallRelatedCardCreateWithoutReferenceInput;
  update: ScryfallRelatedCardUpdateWithoutReferenceInput;
  where: ScryfallRelatedCardWhereUniqueInput;
};

export type ScryfallRelatedCardWhereInput = {
  AND?: InputMaybe<Array<ScryfallRelatedCardWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallRelatedCardWhereInput>>;
  OR?: InputMaybe<Array<ScryfallRelatedCardWhereInput>>;
  card?: InputMaybe<ScryfallCardRelationFilter>;
  cardId?: InputMaybe<StringFilter>;
  component?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reference?: InputMaybe<ScryfallCardRelationFilter>;
  referenceId?: InputMaybe<StringFilter>;
  typeLine?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringFilter>;
};

export type ScryfallRelatedCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ScryfallSet = {
  __typename?: 'ScryfallSet';
  _count: ScryfallSetCount;
  arenaCode?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  blockCode?: Maybe<Scalars['String']>;
  cardCount: Scalars['Int'];
  cards: Array<ScryfallCard>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  iconSvgUri: Scalars['String'];
  id: Scalars['ID'];
  isDigital: Scalars['Boolean'];
  isFoilOnly: Scalars['Boolean'];
  isNonFoilOnly: Scalars['Boolean'];
  mtgoCode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentSetCode?: Maybe<Scalars['String']>;
  printedSize?: Maybe<Scalars['Int']>;
  releasedAt?: Maybe<Scalars['DateTime']>;
  scryfallUri: Scalars['String'];
  searchUri: Scalars['String'];
  setType: Scalars['String'];
  tcgPlayerId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  uri: Scalars['String'];
};


export type ScryfallSetCardsArgs = {
  cursor?: InputMaybe<ScryfallCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScryfallCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScryfallCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScryfallCardWhereInput>;
};

export type ScryfallSetCount = {
  __typename?: 'ScryfallSetCount';
  cards: Scalars['Int'];
};

export type ScryfallSetCreateNestedOneWithoutCardsInput = {
  connect?: InputMaybe<ScryfallSetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallSetCreateOrConnectWithoutCardsInput>;
  create?: InputMaybe<ScryfallSetCreateWithoutCardsInput>;
};

export type ScryfallSetCreateOrConnectWithoutCardsInput = {
  create: ScryfallSetCreateWithoutCardsInput;
  where: ScryfallSetWhereUniqueInput;
};

export type ScryfallSetCreateWithoutCardsInput = {
  arenaCode?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['String']>;
  blockCode?: InputMaybe<Scalars['String']>;
  cardCount: Scalars['Int'];
  code: Scalars['String'];
  iconSvgUri: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isDigital: Scalars['Boolean'];
  isFoilOnly: Scalars['Boolean'];
  isNonFoilOnly: Scalars['Boolean'];
  mtgoCode?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentSetCode?: InputMaybe<Scalars['String']>;
  printedSize?: InputMaybe<Scalars['Int']>;
  releasedAt?: InputMaybe<Scalars['DateTime']>;
  scryfallUri: Scalars['String'];
  searchUri: Scalars['String'];
  setType: Scalars['String'];
  tcgPlayerId?: InputMaybe<Scalars['Int']>;
  uri: Scalars['String'];
};

export type ScryfallSetOrderByWithRelationInput = {
  arenaCode?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  blockCode?: InputMaybe<SortOrder>;
  cardCount?: InputMaybe<SortOrder>;
  cards?: InputMaybe<ScryfallCardOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  iconSvgUri?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDigital?: InputMaybe<SortOrder>;
  isFoilOnly?: InputMaybe<SortOrder>;
  isNonFoilOnly?: InputMaybe<SortOrder>;
  mtgoCode?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentSetCode?: InputMaybe<SortOrder>;
  printedSize?: InputMaybe<SortOrder>;
  releasedAt?: InputMaybe<SortOrder>;
  scryfallUri?: InputMaybe<SortOrder>;
  searchUri?: InputMaybe<SortOrder>;
  setType?: InputMaybe<SortOrder>;
  tcgPlayerId?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type ScryfallSetRelationFilter = {
  is?: InputMaybe<ScryfallSetWhereInput>;
  isNot?: InputMaybe<ScryfallSetWhereInput>;
};

export enum ScryfallSetScalarFieldEnum {
  ArenaCode = 'arenaCode',
  Block = 'block',
  BlockCode = 'blockCode',
  CardCount = 'cardCount',
  Code = 'code',
  CreatedAt = 'createdAt',
  IconSvgUri = 'iconSvgUri',
  Id = 'id',
  IsDigital = 'isDigital',
  IsFoilOnly = 'isFoilOnly',
  IsNonFoilOnly = 'isNonFoilOnly',
  MtgoCode = 'mtgoCode',
  Name = 'name',
  ParentSetCode = 'parentSetCode',
  PrintedSize = 'printedSize',
  ReleasedAt = 'releasedAt',
  ScryfallUri = 'scryfallUri',
  SearchUri = 'searchUri',
  SetType = 'setType',
  TcgPlayerId = 'tcgPlayerId',
  UpdatedAt = 'updatedAt',
  Uri = 'uri'
}

export type ScryfallSetUpdateOneRequiredWithoutCardsInput = {
  connect?: InputMaybe<ScryfallSetWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScryfallSetCreateOrConnectWithoutCardsInput>;
  create?: InputMaybe<ScryfallSetCreateWithoutCardsInput>;
  update?: InputMaybe<ScryfallSetUpdateWithoutCardsInput>;
  upsert?: InputMaybe<ScryfallSetUpsertWithoutCardsInput>;
};

export type ScryfallSetUpdateWithoutCardsInput = {
  arenaCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  block?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  blockCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cardCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  iconSvgUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDigital?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoilOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isNonFoilOnly?: InputMaybe<BoolFieldUpdateOperationsInput>;
  mtgoCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentSetCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  printedSize?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  releasedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  scryfallUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  searchUri?: InputMaybe<StringFieldUpdateOperationsInput>;
  setType?: InputMaybe<StringFieldUpdateOperationsInput>;
  tcgPlayerId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  uri?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ScryfallSetUpsertWithoutCardsInput = {
  create: ScryfallSetCreateWithoutCardsInput;
  update: ScryfallSetUpdateWithoutCardsInput;
};

export type ScryfallSetWhereInput = {
  AND?: InputMaybe<Array<ScryfallSetWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallSetWhereInput>>;
  OR?: InputMaybe<Array<ScryfallSetWhereInput>>;
  arenaCode?: InputMaybe<StringNullableFilter>;
  block?: InputMaybe<StringNullableFilter>;
  blockCode?: InputMaybe<StringNullableFilter>;
  cardCount?: InputMaybe<IntFilter>;
  cards?: InputMaybe<ScryfallCardListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  iconSvgUri?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDigital?: InputMaybe<BoolFilter>;
  isFoilOnly?: InputMaybe<BoolFilter>;
  isNonFoilOnly?: InputMaybe<BoolFilter>;
  mtgoCode?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parentSetCode?: InputMaybe<StringNullableFilter>;
  printedSize?: InputMaybe<IntNullableFilter>;
  releasedAt?: InputMaybe<DateTimeNullableFilter>;
  scryfallUri?: InputMaybe<StringFilter>;
  searchUri?: InputMaybe<StringFilter>;
  setType?: InputMaybe<StringFilter>;
  tcgPlayerId?: InputMaybe<IntNullableFilter>;
  uri?: InputMaybe<StringFilter>;
};

export type ScryfallSetWhereUniqueInput = {
  arenaCode?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mtgoCode?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  _count: TagCount;
  cards: Array<CardsInCollection>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type TagCount = {
  __typename?: 'TagCount';
  cards: Scalars['Int'];
};

export type TagCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TagCreateManyUserInputEnvelope = {
  data: Array<TagCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TagCreateNestedManyWithoutCardsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutCardsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutCardsInput>>;
};

export type TagCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
};

export type TagCreateOrConnectWithoutCardsInput = {
  create: TagCreateWithoutCardsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutCardsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user: UserCreateNestedOneWithoutTagInput;
};

export type TagCreateWithoutUserInput = {
  cards?: InputMaybe<CardsInCollectionCreateNestedManyWithoutTagsInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  cards?: InputMaybe<CardsInCollectionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutCardsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutCardsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutCardsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutCardsInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutCardsInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutCardsInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutCardsInput>>;
};

export type TagUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUserInput>>;
  createMany?: InputMaybe<TagCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateWithWhereUniqueWithoutCardsInput = {
  data: TagUpdateWithoutCardsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutCardsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTagInput>;
};

export type TagUpdateWithoutUserInput = {
  cards?: InputMaybe<CardsInCollectionUpdateManyWithoutTagsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutCardsInput = {
  create: TagCreateWithoutCardsInput;
  update: TagUpdateWithoutCardsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUserIdNameCompoundUniqueInput = {
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  cards?: InputMaybe<CardsInCollectionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId_name?: InputMaybe<TagUserIdNameCompoundUniqueInput>;
};

export type User = {
  __typename?: 'User';
  Tag?: Maybe<Array<Tag>>;
  _count: UserCount;
  collections?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  externalAuthId: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Tag: Scalars['Int'];
  collections: Scalars['Int'];
};

export type UserCreateNestedOneWithoutCollectionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<UserCreateWithoutCollectionsInput>;
};

export type UserCreateNestedOneWithoutTagInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagInput>;
  create?: InputMaybe<UserCreateWithoutTagInput>;
};

export type UserCreateOrConnectWithoutCollectionsInput = {
  create: UserCreateWithoutCollectionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagInput = {
  create: UserCreateWithoutTagInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCollectionsInput = {
  Tag?: InputMaybe<TagCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  externalAuthId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutTagInput = {
  collections?: InputMaybe<CollectionCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  externalAuthId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  Tag?: InputMaybe<TagOrderByRelationAggregateInput>;
  collections?: InputMaybe<CollectionOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  externalAuthId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutCollectionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<UserCreateWithoutCollectionsInput>;
  update?: InputMaybe<UserUpdateWithoutCollectionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCollectionsInput>;
};

export type UserUpdateOneRequiredWithoutTagInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTagInput>;
  create?: InputMaybe<UserCreateWithoutTagInput>;
  update?: InputMaybe<UserUpdateWithoutTagInput>;
  upsert?: InputMaybe<UserUpsertWithoutTagInput>;
};

export type UserUpdateWithoutCollectionsInput = {
  Tag?: InputMaybe<TagUpdateManyWithoutUserInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  externalAuthId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTagInput = {
  collections?: InputMaybe<CollectionUpdateManyWithoutUserInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  externalAuthId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCollectionsInput = {
  create: UserCreateWithoutCollectionsInput;
  update: UserUpdateWithoutCollectionsInput;
};

export type UserUpsertWithoutTagInput = {
  create: UserCreateWithoutTagInput;
  update: UserUpdateWithoutTagInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Tag?: InputMaybe<TagListRelationFilter>;
  collections?: InputMaybe<CollectionListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  externalAuthId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  externalAuthId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type CollectionManageQueryVariables = Exact<{
  collectionId: Scalars['String'];
}>;


export type CollectionManageQuery = { __typename?: 'Query', collection: { __typename?: 'Collection', id: string, name: string } };

export type PaginatedCardsInCollectionQueryVariables = Exact<{
  collectionId: Scalars['String'];
  take: Scalars['Int'];
  skip: Scalars['Int'];
  orderBy?: InputMaybe<Array<CardsInCollectionOrderByWithRelationInput> | CardsInCollectionOrderByWithRelationInput>;
}>;


export type PaginatedCardsInCollectionQuery = { __typename?: 'Query', collection: { __typename?: 'Collection', _count: { __typename?: 'CollectionCount', cards: number }, cards: Array<{ __typename?: 'CardsInCollection', id: string, isFoil: boolean, isEtched: boolean, count: number, createdAt: any, updatedAt: any, price?: { __typename?: 'CardsInCollectionCardPrice', usd: number } | null, card: { __typename?: 'Card', canBeFoil: boolean, name: string, id: string, collectorNumber?: string | null, isBorderless: boolean, isShowcase: boolean, currentPrice: { __typename?: 'ScryfallPrice', usd?: number | null, usdFoil?: number | null, usdEtched?: number | null }, scryfallCard: { __typename?: 'ScryfallCard', rarity: string, imageUris?: any | null, set: { __typename?: 'ScryfallSet', iconSvgUri: string, name: string, code: string } } } }> } };

export type QuickAddCardToCollectionMutationVariables = Exact<{
  input: AddCardToCollectionInput;
}>;


export type QuickAddCardToCollectionMutation = { __typename?: 'Mutation', addCardToCollection: { __typename?: 'CardsInCollection', cardId: string, collectionId: string, isFoil: boolean, isEtched: boolean, count: number } };

export type QuickAddSearchResultsQueryVariables = Exact<{
  name: Scalars['String'];
  collectionId: Scalars['String'];
}>;


export type QuickAddSearchResultsQuery = { __typename?: 'Query', allCards: Array<{ __typename?: 'Card', id: string, name: string, canBeFoil: boolean, canBeEtched: boolean, canBeNonFoil: boolean, collectorNumber?: string | null, isBorderless: boolean, isShowcase: boolean, currentPrice: { __typename?: 'ScryfallPrice', usd?: number | null, usdFoil?: number | null, usdEtched?: number | null }, scryfallCard: { __typename?: 'ScryfallCard', rarity: string, imageUris?: any | null, set: { __typename?: 'ScryfallSet', name: string, code: string, iconSvgUri: string } } }>, collection: { __typename?: 'Collection', id: string, cards: Array<{ __typename?: 'CardsInCollection', cardId: string, isFoil: boolean, isEtched: boolean, count: number, card: { __typename?: 'Card', name: string, scryfallCard: { __typename?: 'ScryfallCard', imageUris?: any | null, rarity: string, set: { __typename?: 'ScryfallSet', code: string, iconSvgUri: string } } } }> } };

export type AddCollectionMutationVariables = Exact<{
  input: CollectionCreateWithoutUserInput;
}>;


export type AddCollectionMutation = { __typename?: 'Mutation', addCollection: { __typename?: 'Collection', id: string } };

export type CollectionListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionListQuery = { __typename?: 'Query', allCollections: Array<{ __typename?: 'Collection', id: string, name: string, _count: { __typename?: 'CollectionCount', cards: number } }> };

export type AddCardToCollectionMutationVariables = Exact<{
  input: AddCardToCollectionInput;
}>;


export type AddCardToCollectionMutation = { __typename?: 'Mutation', addCardToCollection: { __typename?: 'CardsInCollection', cardId: string, collectionId: string, count: number } };

export type SearchCardResultsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SearchCardResultsQuery = { __typename?: 'Query', allCards: Array<{ __typename?: 'Card', id: string, canBeFoil: boolean, canBeEtched: boolean, canBeNonFoil: boolean, collectorNumber?: string | null, isBorderless: boolean, isShowcase: boolean, currentPrice: { __typename?: 'ScryfallPrice', usd?: number | null, usdFoil?: number | null, usdEtched?: number | null }, scryfallCard: { __typename?: 'ScryfallCard', allParts?: Array<any> | null, arenaId?: number | null, artist?: string | null, booster: boolean, borderColor: string, cardBackId?: string | null, cardFacesRaw?: Array<any> | null, cardmarketId?: number | null, cmc?: number | null, collectorNumber: string, colorIdentity?: Array<string> | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, contentWarning?: boolean | null, digital: boolean, edhrecRank?: number | null, finishes?: Array<string> | null, flavorName?: string | null, frame: string, frameEffects?: Array<string> | null, fullArt: boolean, games?: Array<string> | null, handModifier?: string | null, highresImage: boolean, id: string, illustrationId?: string | null, imageStatus: string, imageUris?: any | null, keywords?: Array<string> | null, lang: string, layout: string, legalities: any, lifeModifier?: string | null, loyalty?: string | null, manaCost?: string | null, mtgoFoilId?: number | null, mtgoId?: number | null, multiverseIds?: Array<number> | null, name: string, oracleId?: string | null, oracleText?: string | null, oversized: boolean, power?: string | null, prices: any, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, printsSearchUri: string, producedMana?: Array<string> | null, promo: boolean, promoTypes?: Array<string> | null, purchaseUris?: any | null, rarity: string, relatedUris: any, releasedAt: any, reprint: boolean, reserved: boolean, rulingUri?: string | null, scryfallSetUri: string, scryfallUri: string, securityStamp?: string | null, setCode: string, setId: string, setUri: string, setName: string, setSearchUri: string, setType: string, storySpotlight: boolean, tcgplayerEtchedId?: number | null, textless: boolean, typeLine?: string | null, uri: string, varationOf?: string | null, variation: boolean, watermark?: string | null, cardFaces: Array<{ __typename?: 'ScryfallCardFace', artist?: string | null, cardId: string, cmc?: number | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, flavorText?: string | null, id: string, illustrationId?: string | null, imageUris?: any | null, layout?: string | null, loyalty?: string | null, manaCost?: string | null, name: string, oracleId?: string | null, oracleText?: string | null, power?: string | null, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, toughness?: string | null, typeLine?: string | null, watermark?: string | null }>, referencedBy: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, relatedTo: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, scryfallMostRecentPrice?: { __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null } | null, scryfallPrice: Array<{ __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null }>, set: { __typename?: 'ScryfallSet', id: string, code: string, name: string, iconSvgUri: string } } }>, allCollections: Array<{ __typename?: 'Collection', id: string, name: string }> };

export type ScryfallCardFullFragment = { __typename?: 'ScryfallCard', allParts?: Array<any> | null, arenaId?: number | null, artist?: string | null, booster: boolean, borderColor: string, cardBackId?: string | null, cardFacesRaw?: Array<any> | null, cardmarketId?: number | null, cmc?: number | null, collectorNumber: string, colorIdentity?: Array<string> | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, contentWarning?: boolean | null, digital: boolean, edhrecRank?: number | null, finishes?: Array<string> | null, flavorName?: string | null, frame: string, frameEffects?: Array<string> | null, fullArt: boolean, games?: Array<string> | null, handModifier?: string | null, highresImage: boolean, id: string, illustrationId?: string | null, imageStatus: string, imageUris?: any | null, keywords?: Array<string> | null, lang: string, layout: string, legalities: any, lifeModifier?: string | null, loyalty?: string | null, manaCost?: string | null, mtgoFoilId?: number | null, mtgoId?: number | null, multiverseIds?: Array<number> | null, name: string, oracleId?: string | null, oracleText?: string | null, oversized: boolean, power?: string | null, prices: any, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, printsSearchUri: string, producedMana?: Array<string> | null, promo: boolean, promoTypes?: Array<string> | null, purchaseUris?: any | null, rarity: string, relatedUris: any, releasedAt: any, reprint: boolean, reserved: boolean, rulingUri?: string | null, scryfallSetUri: string, scryfallUri: string, securityStamp?: string | null, setCode: string, setId: string, setUri: string, setName: string, setSearchUri: string, setType: string, storySpotlight: boolean, tcgplayerEtchedId?: number | null, textless: boolean, typeLine?: string | null, uri: string, varationOf?: string | null, variation: boolean, watermark?: string | null, cardFaces: Array<{ __typename?: 'ScryfallCardFace', artist?: string | null, cardId: string, cmc?: number | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, flavorText?: string | null, id: string, illustrationId?: string | null, imageUris?: any | null, layout?: string | null, loyalty?: string | null, manaCost?: string | null, name: string, oracleId?: string | null, oracleText?: string | null, power?: string | null, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, toughness?: string | null, typeLine?: string | null, watermark?: string | null }>, referencedBy: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, relatedTo: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, scryfallMostRecentPrice?: { __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null } | null, scryfallPrice: Array<{ __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null }>, set: { __typename?: 'ScryfallSet', id: string, code: string, name: string, iconSvgUri: string } };

export type CreateTagMutationVariables = Exact<{
  input: TagCreateWithoutUserInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', id: string, name: string } };

export type CollectionGridDeleteCardFromCollectionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CollectionGridDeleteCardFromCollectionMutation = { __typename?: 'Mutation', deleteCardFromCollection: { __typename?: 'CardsInCollection', cardId: string, collectionId: string, isEtched: boolean, isFoil: boolean } };

export type UpdateCardInCollectionMutationVariables = Exact<{
  id: Scalars['String'];
  input: CardsInCollectionUpdateInput;
}>;


export type UpdateCardInCollectionMutation = { __typename?: 'Mutation', updateCardsInCollection: { __typename?: 'CardsInCollection', id: string, cardId: string, collectionId: string, isFoil: boolean, isEtched: boolean, count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, cards: Array<{ __typename?: 'CardsInCollection', id: string }> }> } };

export const ScryfallCardFullFragmentDoc = gql`
    fragment ScryfallCardFull on ScryfallCard {
  allParts
  arenaId
  artist
  booster
  borderColor
  cardBackId
  cardFaces {
    artist
    cardId
    cmc
    colorIndicator
    colors
    flavorText
    id
    illustrationId
    imageUris
    layout
    loyalty
    manaCost
    name
    oracleId
    oracleText
    power
    printedName
    printedText
    printedTypeLine
    toughness
    typeLine
    watermark
  }
  cardFacesRaw
  cardmarketId
  cmc
  collectorNumber
  colorIdentity
  colorIndicator
  colors
  contentWarning
  digital
  edhrecRank
  finishes
  flavorName
  frame
  frameEffects
  fullArt
  games
  handModifier
  highresImage
  id
  illustrationId
  imageStatus
  imageUris
  keywords
  lang
  layout
  legalities
  lifeModifier
  loyalty
  manaCost
  mtgoFoilId
  mtgoId
  multiverseIds
  name
  oracleId
  oracleText
  oversized
  power
  prices
  printedName
  printedText
  printedTypeLine
  printsSearchUri
  producedMana
  promo
  promoTypes
  purchaseUris
  rarity
  referencedBy {
    cardId
    component
    name
    typeLine
    uri
  }
  relatedTo {
    cardId
    component
    name
    typeLine
    uri
  }
  relatedUris
  releasedAt
  reprint
  reserved
  rulingUri
  scryfallMostRecentPrice {
    date
    eur
    eurFoil
    tix
    usd
    usdEtched
    usdFoil
  }
  scryfallPrice {
    date
    eur
    eurFoil
    tix
    usd
    usdEtched
    usdFoil
  }
  scryfallSetUri
  scryfallUri
  securityStamp
  set {
    id
    code
    name
    iconSvgUri
  }
  setCode
  setId
  setUri
  setName
  setSearchUri
  setType
  storySpotlight
  tcgplayerEtchedId
  textless
  typeLine
  uri
  varationOf
  variation
  watermark
}
    `;
export const CollectionManageDocument = gql`
    query CollectionManage($collectionId: String!) {
  collection(where: {id: {equals: $collectionId}}) {
    id
    name
  }
}
    `;

/**
 * __useCollectionManageQuery__
 *
 * To run a query within a React component, call `useCollectionManageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionManageQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionManageQuery(baseOptions: Apollo.QueryHookOptions<CollectionManageQuery, CollectionManageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionManageQuery, CollectionManageQueryVariables>(CollectionManageDocument, options);
      }
export function useCollectionManageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionManageQuery, CollectionManageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionManageQuery, CollectionManageQueryVariables>(CollectionManageDocument, options);
        }
export type CollectionManageQueryHookResult = ReturnType<typeof useCollectionManageQuery>;
export type CollectionManageLazyQueryHookResult = ReturnType<typeof useCollectionManageLazyQuery>;
export type CollectionManageQueryResult = Apollo.QueryResult<CollectionManageQuery, CollectionManageQueryVariables>;
export const PaginatedCardsInCollectionDocument = gql`
    query PaginatedCardsInCollection($collectionId: String!, $take: Int!, $skip: Int!, $orderBy: [CardsInCollectionOrderByWithRelationInput!]) {
  collection(where: {id: {equals: $collectionId}}) {
    _count {
      cards
    }
    cards(take: $take, skip: $skip, orderBy: $orderBy) {
      id
      isFoil
      isEtched
      count
      price {
        usd
      }
      card {
        canBeFoil
        name
        id
        collectorNumber
        isBorderless
        isShowcase
        currentPrice {
          usd
          usdFoil
          usdEtched
        }
        scryfallCard {
          set {
            iconSvgUri
            name
            code
          }
          rarity
          imageUris
        }
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __usePaginatedCardsInCollectionQuery__
 *
 * To run a query within a React component, call `usePaginatedCardsInCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedCardsInCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedCardsInCollectionQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePaginatedCardsInCollectionQuery(baseOptions: Apollo.QueryHookOptions<PaginatedCardsInCollectionQuery, PaginatedCardsInCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedCardsInCollectionQuery, PaginatedCardsInCollectionQueryVariables>(PaginatedCardsInCollectionDocument, options);
      }
export function usePaginatedCardsInCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedCardsInCollectionQuery, PaginatedCardsInCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedCardsInCollectionQuery, PaginatedCardsInCollectionQueryVariables>(PaginatedCardsInCollectionDocument, options);
        }
export type PaginatedCardsInCollectionQueryHookResult = ReturnType<typeof usePaginatedCardsInCollectionQuery>;
export type PaginatedCardsInCollectionLazyQueryHookResult = ReturnType<typeof usePaginatedCardsInCollectionLazyQuery>;
export type PaginatedCardsInCollectionQueryResult = Apollo.QueryResult<PaginatedCardsInCollectionQuery, PaginatedCardsInCollectionQueryVariables>;
export const QuickAddCardToCollectionDocument = gql`
    mutation QuickAddCardToCollection($input: AddCardToCollectionInput!) {
  addCardToCollection(input: $input) {
    cardId
    collectionId
    isFoil
    isEtched
    count
  }
}
    `;
export type QuickAddCardToCollectionMutationFn = Apollo.MutationFunction<QuickAddCardToCollectionMutation, QuickAddCardToCollectionMutationVariables>;

/**
 * __useQuickAddCardToCollectionMutation__
 *
 * To run a mutation, you first call `useQuickAddCardToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuickAddCardToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [quickAddCardToCollectionMutation, { data, loading, error }] = useQuickAddCardToCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQuickAddCardToCollectionMutation(baseOptions?: Apollo.MutationHookOptions<QuickAddCardToCollectionMutation, QuickAddCardToCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QuickAddCardToCollectionMutation, QuickAddCardToCollectionMutationVariables>(QuickAddCardToCollectionDocument, options);
      }
export type QuickAddCardToCollectionMutationHookResult = ReturnType<typeof useQuickAddCardToCollectionMutation>;
export type QuickAddCardToCollectionMutationResult = Apollo.MutationResult<QuickAddCardToCollectionMutation>;
export type QuickAddCardToCollectionMutationOptions = Apollo.BaseMutationOptions<QuickAddCardToCollectionMutation, QuickAddCardToCollectionMutationVariables>;
export const QuickAddSearchResultsDocument = gql`
    query QuickAddSearchResults($name: String!, $collectionId: String!) {
  allCards(
    where: {isPaper: {equals: true}, scryfallCard: {is: {name: {equals: $name}}}}
  ) {
    id
    name
    canBeFoil
    canBeEtched
    canBeNonFoil
    collectorNumber
    isBorderless
    isShowcase
    currentPrice {
      usd
      usdFoil
      usdEtched
    }
    scryfallCard {
      set {
        name
        code
        iconSvgUri
      }
      rarity
      imageUris
    }
  }
  collection(where: {id: {equals: $collectionId}}) {
    id
    cards(where: {card: {is: {name: {equals: $name}}}}) {
      card {
        name
        scryfallCard {
          imageUris
          rarity
          set {
            code
            iconSvgUri
          }
        }
      }
      cardId
      isFoil
      isEtched
      count
    }
  }
}
    `;

/**
 * __useQuickAddSearchResultsQuery__
 *
 * To run a query within a React component, call `useQuickAddSearchResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuickAddSearchResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuickAddSearchResultsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useQuickAddSearchResultsQuery(baseOptions: Apollo.QueryHookOptions<QuickAddSearchResultsQuery, QuickAddSearchResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuickAddSearchResultsQuery, QuickAddSearchResultsQueryVariables>(QuickAddSearchResultsDocument, options);
      }
export function useQuickAddSearchResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuickAddSearchResultsQuery, QuickAddSearchResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuickAddSearchResultsQuery, QuickAddSearchResultsQueryVariables>(QuickAddSearchResultsDocument, options);
        }
export type QuickAddSearchResultsQueryHookResult = ReturnType<typeof useQuickAddSearchResultsQuery>;
export type QuickAddSearchResultsLazyQueryHookResult = ReturnType<typeof useQuickAddSearchResultsLazyQuery>;
export type QuickAddSearchResultsQueryResult = Apollo.QueryResult<QuickAddSearchResultsQuery, QuickAddSearchResultsQueryVariables>;
export const AddCollectionDocument = gql`
    mutation AddCollection($input: CollectionCreateWithoutUserInput!) {
  addCollection(input: $input) {
    id
  }
}
    `;
export type AddCollectionMutationFn = Apollo.MutationFunction<AddCollectionMutation, AddCollectionMutationVariables>;

/**
 * __useAddCollectionMutation__
 *
 * To run a mutation, you first call `useAddCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCollectionMutation, { data, loading, error }] = useAddCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCollectionMutation(baseOptions?: Apollo.MutationHookOptions<AddCollectionMutation, AddCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCollectionMutation, AddCollectionMutationVariables>(AddCollectionDocument, options);
      }
export type AddCollectionMutationHookResult = ReturnType<typeof useAddCollectionMutation>;
export type AddCollectionMutationResult = Apollo.MutationResult<AddCollectionMutation>;
export type AddCollectionMutationOptions = Apollo.BaseMutationOptions<AddCollectionMutation, AddCollectionMutationVariables>;
export const CollectionListDocument = gql`
    query CollectionList {
  allCollections {
    id
    name
    _count {
      cards
    }
  }
}
    `;

/**
 * __useCollectionListQuery__
 *
 * To run a query within a React component, call `useCollectionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionListQuery(baseOptions?: Apollo.QueryHookOptions<CollectionListQuery, CollectionListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionListQuery, CollectionListQueryVariables>(CollectionListDocument, options);
      }
export function useCollectionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionListQuery, CollectionListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionListQuery, CollectionListQueryVariables>(CollectionListDocument, options);
        }
export type CollectionListQueryHookResult = ReturnType<typeof useCollectionListQuery>;
export type CollectionListLazyQueryHookResult = ReturnType<typeof useCollectionListLazyQuery>;
export type CollectionListQueryResult = Apollo.QueryResult<CollectionListQuery, CollectionListQueryVariables>;
export const AddCardToCollectionDocument = gql`
    mutation AddCardToCollection($input: AddCardToCollectionInput!) {
  addCardToCollection(input: $input) {
    cardId
    collectionId
    count
  }
}
    `;
export type AddCardToCollectionMutationFn = Apollo.MutationFunction<AddCardToCollectionMutation, AddCardToCollectionMutationVariables>;

/**
 * __useAddCardToCollectionMutation__
 *
 * To run a mutation, you first call `useAddCardToCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCardToCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCardToCollectionMutation, { data, loading, error }] = useAddCardToCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCardToCollectionMutation(baseOptions?: Apollo.MutationHookOptions<AddCardToCollectionMutation, AddCardToCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCardToCollectionMutation, AddCardToCollectionMutationVariables>(AddCardToCollectionDocument, options);
      }
export type AddCardToCollectionMutationHookResult = ReturnType<typeof useAddCardToCollectionMutation>;
export type AddCardToCollectionMutationResult = Apollo.MutationResult<AddCardToCollectionMutation>;
export type AddCardToCollectionMutationOptions = Apollo.BaseMutationOptions<AddCardToCollectionMutation, AddCardToCollectionMutationVariables>;
export const SearchCardResultsDocument = gql`
    query SearchCardResults($name: String!) {
  allCards(
    where: {isPaper: {equals: true}, scryfallCard: {is: {name: {equals: $name}}}}
  ) {
    id
    canBeFoil
    canBeEtched
    canBeNonFoil
    collectorNumber
    isBorderless
    isShowcase
    currentPrice {
      usd
      usdFoil
      usdEtched
    }
    scryfallCard {
      ...ScryfallCardFull
    }
  }
  allCollections {
    id
    name
  }
}
    ${ScryfallCardFullFragmentDoc}`;

/**
 * __useSearchCardResultsQuery__
 *
 * To run a query within a React component, call `useSearchCardResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCardResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCardResultsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchCardResultsQuery(baseOptions: Apollo.QueryHookOptions<SearchCardResultsQuery, SearchCardResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCardResultsQuery, SearchCardResultsQueryVariables>(SearchCardResultsDocument, options);
      }
export function useSearchCardResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCardResultsQuery, SearchCardResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCardResultsQuery, SearchCardResultsQueryVariables>(SearchCardResultsDocument, options);
        }
export type SearchCardResultsQueryHookResult = ReturnType<typeof useSearchCardResultsQuery>;
export type SearchCardResultsLazyQueryHookResult = ReturnType<typeof useSearchCardResultsLazyQuery>;
export type SearchCardResultsQueryResult = Apollo.QueryResult<SearchCardResultsQuery, SearchCardResultsQueryVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($input: TagCreateWithoutUserInput!) {
  createTag(input: $input) {
    id
    name
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const CollectionGridDeleteCardFromCollectionDocument = gql`
    mutation CollectionGridDeleteCardFromCollection($id: String!) {
  deleteCardFromCollection(where: {id: $id}) {
    cardId
    collectionId
    isEtched
    isFoil
  }
}
    `;
export type CollectionGridDeleteCardFromCollectionMutationFn = Apollo.MutationFunction<CollectionGridDeleteCardFromCollectionMutation, CollectionGridDeleteCardFromCollectionMutationVariables>;

/**
 * __useCollectionGridDeleteCardFromCollectionMutation__
 *
 * To run a mutation, you first call `useCollectionGridDeleteCardFromCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectionGridDeleteCardFromCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectionGridDeleteCardFromCollectionMutation, { data, loading, error }] = useCollectionGridDeleteCardFromCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionGridDeleteCardFromCollectionMutation(baseOptions?: Apollo.MutationHookOptions<CollectionGridDeleteCardFromCollectionMutation, CollectionGridDeleteCardFromCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CollectionGridDeleteCardFromCollectionMutation, CollectionGridDeleteCardFromCollectionMutationVariables>(CollectionGridDeleteCardFromCollectionDocument, options);
      }
export type CollectionGridDeleteCardFromCollectionMutationHookResult = ReturnType<typeof useCollectionGridDeleteCardFromCollectionMutation>;
export type CollectionGridDeleteCardFromCollectionMutationResult = Apollo.MutationResult<CollectionGridDeleteCardFromCollectionMutation>;
export type CollectionGridDeleteCardFromCollectionMutationOptions = Apollo.BaseMutationOptions<CollectionGridDeleteCardFromCollectionMutation, CollectionGridDeleteCardFromCollectionMutationVariables>;
export const UpdateCardInCollectionDocument = gql`
    mutation UpdateCardInCollection($id: String!, $input: CardsInCollectionUpdateInput!) {
  updateCardsInCollection(id: $id, input: $input) {
    id
    cardId
    collectionId
    isFoil
    isEtched
    count
    tags {
      id
      name
      cards {
        id
      }
    }
  }
}
    `;
export type UpdateCardInCollectionMutationFn = Apollo.MutationFunction<UpdateCardInCollectionMutation, UpdateCardInCollectionMutationVariables>;

/**
 * __useUpdateCardInCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCardInCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCardInCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCardInCollectionMutation, { data, loading, error }] = useUpdateCardInCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCardInCollectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCardInCollectionMutation, UpdateCardInCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCardInCollectionMutation, UpdateCardInCollectionMutationVariables>(UpdateCardInCollectionDocument, options);
      }
export type UpdateCardInCollectionMutationHookResult = ReturnType<typeof useUpdateCardInCollectionMutation>;
export type UpdateCardInCollectionMutationResult = Apollo.MutationResult<UpdateCardInCollectionMutation>;
export type UpdateCardInCollectionMutationOptions = Apollo.BaseMutationOptions<UpdateCardInCollectionMutation, UpdateCardInCollectionMutationVariables>;