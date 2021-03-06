import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ScryfallCardRelationFilter } from '../scryfall-card/scryfall-card-relation-filter.input';
import { CardsInCollectionListRelationFilter } from '../cards-in-collection/cards-in-collection-list-relation-filter.input';
import { ScryfallPriceRelationFilter } from '../scryfall-price/scryfall-price-relation-filter.input';

@InputType()
export class CardWhereInput {
  @Field(() => [CardWhereInput], { nullable: true })
  AND?: Array<CardWhereInput>;

  @Field(() => [CardWhereInput], { nullable: true })
  OR?: Array<CardWhereInput>;

  @Field(() => [CardWhereInput], { nullable: true })
  NOT?: Array<CardWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  scryfallCardId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  isBorderless?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  isShowcase?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  canBeFoil?: BoolFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  collectorNumber?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isPaper?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  canBeEtched?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  canBeNonFoil?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  isExtendedArt?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  isRetro?: BoolFilter;

  @Field(() => ScryfallCardRelationFilter, { nullable: true })
  scryfallCard?: ScryfallCardRelationFilter;

  @Field(() => CardsInCollectionListRelationFilter, { nullable: true })
  collections?: CardsInCollectionListRelationFilter;

  @Field(() => ScryfallPriceRelationFilter, { nullable: true })
  currentPrice?: ScryfallPriceRelationFilter;
}
