import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ScryfallCardRelationFilter } from '../scryfall-card/scryfall-card-relation-filter.input';
import { ScryfallPriceRelationFilter } from '../scryfall-price/scryfall-price-relation-filter.input';
import { CardsInCollectionListRelationFilter } from '../cards-in-collection/cards-in-collection-list-relation-filter.input';

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

  @Field(() => ScryfallCardRelationFilter, { nullable: true })
  scryfallCard?: ScryfallCardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  scryfallCardId?: StringFilter;

  @Field(() => ScryfallPriceRelationFilter, { nullable: true })
  currentPrice?: ScryfallPriceRelationFilter;

  @Field(() => CardsInCollectionListRelationFilter, { nullable: true })
  collections?: CardsInCollectionListRelationFilter;
}
