import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';
import { CardsInCollectionOrderByRelationAggregateInput } from '../cards-in-collection/cards-in-collection-order-by-relation-aggregate.input';
import { ScryfallPriceOrderByWithRelationInput } from '../scryfall-price/scryfall-price-order-by-with-relation.input';

@InputType()
export class CardOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallCardId?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isBorderless?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isShowcase?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectorNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isPaper?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeNonFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isExtendedArt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isRetro?: keyof typeof SortOrder;

  @Field(() => ScryfallCardOrderByWithRelationInput, { nullable: true })
  scryfallCard?: ScryfallCardOrderByWithRelationInput;

  @Field(() => CardsInCollectionOrderByRelationAggregateInput, {
    nullable: true,
  })
  collections?: CardsInCollectionOrderByRelationAggregateInput;

  @Field(() => ScryfallPriceOrderByWithRelationInput, { nullable: true })
  currentPrice?: ScryfallPriceOrderByWithRelationInput;
}
