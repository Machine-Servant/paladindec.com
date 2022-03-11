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
  collections?: Maybe<Array<CardsInCollection>>;
  collectorNumber?: Maybe<Scalars['String']>;
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
};

export type CardCount = {
  __typename?: 'CardCount';
  collections: Scalars['Int'];
};

export type CardCreateManyScryfallCardInput = {
  canBeEtched?: InputMaybe<Scalars['Boolean']>;
  canBeFoil?: InputMaybe<Scalars['Boolean']>;
  canBeNonFoil?: InputMaybe<Scalars['Boolean']>;
  collectorNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isBorderless?: InputMaybe<Scalars['Boolean']>;
  isExtendedArt?: InputMaybe<Scalars['Boolean']>;
  isPaper?: InputMaybe<Scalars['Boolean']>;
  isRetro?: InputMaybe<Scalars['Boolean']>;
  isShowcase?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CardCreateManyScryfallCardInputEnvelope = {
  data: Array<CardCreateManyScryfallCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CardCreateNestedManyWithoutScryfallCardInput = {
  connect?: InputMaybe<Array<CardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CardCreateOrConnectWithoutScryfallCardInput>>;
  create?: InputMaybe<Array<CardCreateWithoutScryfallCardInput>>;
  createMany?: InputMaybe<CardCreateManyScryfallCardInputEnvelope>;
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

export type CardListRelationFilter = {
  every?: InputMaybe<CardWhereInput>;
  none?: InputMaybe<CardWhereInput>;
  some?: InputMaybe<CardWhereInput>;
};

export type CardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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
  Id = 'id',
  IsBorderless = 'isBorderless',
  IsExtendedArt = 'isExtendedArt',
  IsPaper = 'isPaper',
  IsRetro = 'isRetro',
  IsShowcase = 'isShowcase',
  Name = 'name',
  ScryfallCardId = 'scryfallCardId'
}

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
  card: Card;
  cardId: Scalars['String'];
  collection: Collection;
  collectionId: Scalars['String'];
  count: Scalars['Int'];
  isEtched: Scalars['Boolean'];
  isFoil: Scalars['Boolean'];
  price?: Maybe<CardsInCollectionCardPrice>;
};

export type CardsInCollectionCardIdCollectionIdCompoundUniqueInput = {
  cardId: Scalars['String'];
  collectionId: Scalars['String'];
};

export type CardsInCollectionCardPrice = {
  __typename?: 'CardsInCollectionCardPrice';
  eur: Scalars['Float'];
  usd: Scalars['Float'];
};

export type CardsInCollectionCreateManyCardInput = {
  collectionId: Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
};

export type CardsInCollectionCreateManyCardInputEnvelope = {
  data: Array<CardsInCollectionCreateManyCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CardsInCollectionCreateManyCollectionInput = {
  cardId: Scalars['String'];
  count?: InputMaybe<Scalars['Int']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
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

export type CardsInCollectionCreateOrConnectWithoutCardInput = {
  create: CardsInCollectionCreateWithoutCardInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionCreateOrConnectWithoutCollectionInput = {
  create: CardsInCollectionCreateWithoutCollectionInput;
  where: CardsInCollectionWhereUniqueInput;
};

export type CardsInCollectionCreateWithoutCardInput = {
  collection: CollectionCreateNestedOneWithoutCardsInput;
  count?: InputMaybe<Scalars['Int']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
};

export type CardsInCollectionCreateWithoutCollectionInput = {
  card: CardCreateNestedOneWithoutCollectionsInput;
  count?: InputMaybe<Scalars['Int']>;
  isEtched?: InputMaybe<Scalars['Boolean']>;
  isFoil?: InputMaybe<Scalars['Boolean']>;
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
  isEtched?: InputMaybe<SortOrder>;
  isFoil?: InputMaybe<SortOrder>;
};

export enum CardsInCollectionScalarFieldEnum {
  CardId = 'cardId',
  CollectionId = 'collectionId',
  Count = 'count',
  IsEtched = 'isEtched',
  IsFoil = 'isFoil'
}

export type CardsInCollectionUncheckedUpdateInput = {
  cardId?: InputMaybe<StringFieldUpdateOperationsInput>;
  collectionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  isEtched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  isFoil?: InputMaybe<BoolFieldUpdateOperationsInput>;
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
  isEtched?: InputMaybe<BoolFilter>;
  isFoil?: InputMaybe<BoolFilter>;
};

export type CardsInCollectionWhereUniqueInput = {
  cardId_collectionId?: InputMaybe<CardsInCollectionCardIdCollectionIdCompoundUniqueInput>;
};

export type Collection = {
  __typename?: 'Collection';
  _count: CollectionCount;
  cards: Array<CardsInCollection>;
  id: Scalars['ID'];
  name: Scalars['String'];
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

export type CollectionCreateNestedOneWithoutCardsInput = {
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CollectionCreateOrConnectWithoutCardsInput>;
  create?: InputMaybe<CollectionCreateWithoutCardsInput>;
};

export type CollectionCreateOrConnectWithoutCardsInput = {
  create: CollectionCreateWithoutCardsInput;
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
  Id = 'id',
  Name = 'name',
  UserId = 'userId'
}

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
  addCollection: Collection;
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


export type MutationAddCollectionArgs = {
  input: CollectionCreateWithoutUserInput;
};


export type MutationDownloadBulkDataArgs = {
  typeName: Scalars['String'];
};


export type MutationGetOrCreateUserArgs = {
  input: UserCreateWithoutCollectionsInput;
};


export type MutationUpdateCardsInCollectionArgs = {
  input: CardsInCollectionUncheckedUpdateInput;
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

export type Query = {
  __typename?: 'Query';
  allBulkData: Array<BulkDataObjectType>;
  allCards: Array<Card>;
  allCollections: Array<Collection>;
  allScryfallCardNames: Array<ScryfallCardName>;
  allScryfallCards: Array<ScryfallCard>;
  allScryfallPrices: Array<ScryfallPrice>;
  allScryfallSets: Array<ScryfallSet>;
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
  card?: Maybe<Array<Card>>;
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
  card: Scalars['Int'];
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
  card?: InputMaybe<CardCreateNestedManyWithoutScryfallCardInput>;
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
  card?: InputMaybe<CardCreateNestedManyWithoutScryfallCardInput>;
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
  card?: InputMaybe<CardCreateNestedManyWithoutScryfallCardInput>;
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
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ScryfallCardNameOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum ScryfallCardNameScalarFieldEnum {
  Id = 'id',
  Name = 'name'
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
  card?: InputMaybe<CardOrderByRelationAggregateInput>;
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
  Uri = 'uri',
  VarationOf = 'varationOf',
  Variation = 'variation',
  Watermark = 'watermark'
}

export type ScryfallCardWhereInput = {
  AND?: InputMaybe<Array<ScryfallCardWhereInput>>;
  NOT?: InputMaybe<Array<ScryfallCardWhereInput>>;
  OR?: InputMaybe<Array<ScryfallCardWhereInput>>;
  allParts?: InputMaybe<JsonNullableListFilter>;
  arenaId?: InputMaybe<IntNullableFilter>;
  artist?: InputMaybe<StringNullableFilter>;
  booster?: InputMaybe<BoolFilter>;
  borderColor?: InputMaybe<StringFilter>;
  card?: InputMaybe<CardListRelationFilter>;
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
  currentPriceOfCard?: Maybe<Card>;
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  tix?: Maybe<Scalars['Float']>;
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
  currentPriceOfCardId: Scalars['Int'];
  date: Scalars['Int'];
  eur: Scalars['Int'];
  eurFoil: Scalars['Int'];
  id: Scalars['Int'];
  tix: Scalars['Int'];
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
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  tix?: Maybe<Scalars['Float']>;
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
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  tix?: Maybe<Scalars['Float']>;
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
  currentPriceOfCardId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  eur?: Maybe<Scalars['Float']>;
  eurFoil?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  tix?: Maybe<Scalars['Float']>;
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
  CurrentPriceOfCardId = 'currentPriceOfCardId',
  Date = 'date',
  Eur = 'eur',
  EurFoil = 'eurFoil',
  Id = 'id',
  Tix = 'tix',
  Usd = 'usd',
  UsdEtched = 'usdEtched',
  UsdFoil = 'usdFoil'
}

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
  id: Scalars['ID'];
  name: Scalars['String'];
  reference: Array<ScryfallCard>;
  referenceId: Scalars['String'];
  typeLine: Scalars['String'];
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
  Uri = 'uri'
}

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

export type User = {
  __typename?: 'User';
  _count: UserCount;
  collections?: Maybe<Array<Collection>>;
  email: Scalars['String'];
  externalAuthId: Scalars['String'];
  id: Scalars['ID'];
};

export type UserCount = {
  __typename?: 'UserCount';
  collections: Scalars['Int'];
};

export type UserCreateNestedOneWithoutCollectionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollectionsInput>;
  create?: InputMaybe<UserCreateWithoutCollectionsInput>;
};

export type UserCreateOrConnectWithoutCollectionsInput = {
  create: UserCreateWithoutCollectionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCollectionsInput = {
  email: Scalars['String'];
  externalAuthId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  collections?: InputMaybe<CollectionOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  externalAuthId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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


export type CollectionManageQuery = { __typename?: 'Query', collection: { __typename?: 'Collection', id: string, name: string, cards: Array<{ __typename?: 'CardsInCollection', isFoil: boolean, count: number, card: { __typename?: 'Card', canBeFoil: boolean, name: string, id: string, collectorNumber?: string | null, isBorderless: boolean, isShowcase: boolean, scryfallCard: { __typename?: 'ScryfallCard', setCode: string, setName: string } } }> } };

export type AddCollectionMutationVariables = Exact<{
  input: CollectionCreateWithoutUserInput;
}>;


export type AddCollectionMutation = { __typename?: 'Mutation', addCollection: { __typename?: 'Collection', id: string } };

export type CollectionListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionListQuery = { __typename?: 'Query', allCollections: Array<{ __typename?: 'Collection', id: string, name: string, _count: { __typename?: 'CollectionCount', cards: number } }> };

export type SearchCardResultsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SearchCardResultsQuery = { __typename?: 'Query', allCards: Array<{ __typename?: 'Card', id: string, canBeFoil: boolean, canBeEtched: boolean, canBeNonFoil: boolean, collectorNumber?: string | null, isBorderless: boolean, isShowcase: boolean, currentPrice: { __typename?: 'ScryfallPrice', usd?: number | null, usdFoil?: number | null, usdEtched?: number | null }, scryfallCard: { __typename?: 'ScryfallCard', allParts?: Array<any> | null, arenaId?: number | null, artist?: string | null, booster: boolean, borderColor: string, cardBackId?: string | null, cardFacesRaw?: Array<any> | null, cardmarketId?: number | null, cmc?: number | null, collectorNumber: string, colorIdentity?: Array<string> | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, contentWarning?: boolean | null, digital: boolean, edhrecRank?: number | null, finishes?: Array<string> | null, flavorName?: string | null, frame: string, frameEffects?: Array<string> | null, fullArt: boolean, games?: Array<string> | null, handModifier?: string | null, highresImage: boolean, id: string, illustrationId?: string | null, imageStatus: string, imageUris?: any | null, keywords?: Array<string> | null, lang: string, layout: string, legalities: any, lifeModifier?: string | null, loyalty?: string | null, manaCost?: string | null, mtgoFoilId?: number | null, mtgoId?: number | null, multiverseIds?: Array<number> | null, name: string, oracleId?: string | null, oracleText?: string | null, oversized: boolean, power?: string | null, prices: any, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, printsSearchUri: string, producedMana?: Array<string> | null, promo: boolean, promoTypes?: Array<string> | null, purchaseUris?: any | null, rarity: string, relatedUris: any, releasedAt: any, reprint: boolean, reserved: boolean, rulingUri?: string | null, scryfallSetUri: string, scryfallUri: string, securityStamp?: string | null, setCode: string, setId: string, setUri: string, setName: string, setSearchUri: string, setType: string, storySpotlight: boolean, tcgplayerEtchedId?: number | null, textless: boolean, typeLine?: string | null, uri: string, varationOf?: string | null, variation: boolean, watermark?: string | null, cardFaces: Array<{ __typename?: 'ScryfallCardFace', artist?: string | null, cardId: string, cmc?: number | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, flavorText?: string | null, id: string, illustrationId?: string | null, imageUris?: any | null, layout?: string | null, loyalty?: string | null, manaCost?: string | null, name: string, oracleId?: string | null, oracleText?: string | null, power?: string | null, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, toughness?: string | null, typeLine?: string | null, watermark?: string | null }>, referencedBy: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, relatedTo: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, scryfallMostRecentPrice?: { __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null } | null, scryfallPrice: Array<{ __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null }>, set: { __typename?: 'ScryfallSet', id: string, code: string, name: string, iconSvgUri: string } } }> };

export type ScryfallCardFullFragment = { __typename?: 'ScryfallCard', allParts?: Array<any> | null, arenaId?: number | null, artist?: string | null, booster: boolean, borderColor: string, cardBackId?: string | null, cardFacesRaw?: Array<any> | null, cardmarketId?: number | null, cmc?: number | null, collectorNumber: string, colorIdentity?: Array<string> | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, contentWarning?: boolean | null, digital: boolean, edhrecRank?: number | null, finishes?: Array<string> | null, flavorName?: string | null, frame: string, frameEffects?: Array<string> | null, fullArt: boolean, games?: Array<string> | null, handModifier?: string | null, highresImage: boolean, id: string, illustrationId?: string | null, imageStatus: string, imageUris?: any | null, keywords?: Array<string> | null, lang: string, layout: string, legalities: any, lifeModifier?: string | null, loyalty?: string | null, manaCost?: string | null, mtgoFoilId?: number | null, mtgoId?: number | null, multiverseIds?: Array<number> | null, name: string, oracleId?: string | null, oracleText?: string | null, oversized: boolean, power?: string | null, prices: any, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, printsSearchUri: string, producedMana?: Array<string> | null, promo: boolean, promoTypes?: Array<string> | null, purchaseUris?: any | null, rarity: string, relatedUris: any, releasedAt: any, reprint: boolean, reserved: boolean, rulingUri?: string | null, scryfallSetUri: string, scryfallUri: string, securityStamp?: string | null, setCode: string, setId: string, setUri: string, setName: string, setSearchUri: string, setType: string, storySpotlight: boolean, tcgplayerEtchedId?: number | null, textless: boolean, typeLine?: string | null, uri: string, varationOf?: string | null, variation: boolean, watermark?: string | null, cardFaces: Array<{ __typename?: 'ScryfallCardFace', artist?: string | null, cardId: string, cmc?: number | null, colorIndicator?: Array<string> | null, colors?: Array<string> | null, flavorText?: string | null, id: string, illustrationId?: string | null, imageUris?: any | null, layout?: string | null, loyalty?: string | null, manaCost?: string | null, name: string, oracleId?: string | null, oracleText?: string | null, power?: string | null, printedName?: string | null, printedText?: string | null, printedTypeLine?: string | null, toughness?: string | null, typeLine?: string | null, watermark?: string | null }>, referencedBy: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, relatedTo: Array<{ __typename?: 'ScryfallRelatedCard', cardId: string, component: string, name: string, typeLine: string, uri: string }>, scryfallMostRecentPrice?: { __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null } | null, scryfallPrice: Array<{ __typename?: 'ScryfallPrice', date: any, eur?: number | null, eurFoil?: number | null, tix?: number | null, usd?: number | null, usdEtched?: number | null, usdFoil?: number | null }>, set: { __typename?: 'ScryfallSet', id: string, code: string, name: string, iconSvgUri: string } };

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
    cards(take: 10) {
      isFoil
      count
      card {
        canBeFoil
        name
        id
        collectorNumber
        isBorderless
        isShowcase
        scryfallCard {
          setCode
          setName
        }
      }
    }
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