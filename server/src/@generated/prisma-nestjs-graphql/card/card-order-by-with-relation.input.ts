import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';
import { ScryfallPriceOrderByWithRelationInput } from '../scryfall-price/scryfall-price-order-by-with-relation.input';
import { CardsInCollectionOrderByRelationAggregateInput } from '../cards-in-collection/cards-in-collection-order-by-relation-aggregate.input';

@InputType()
export class CardOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ScryfallCardOrderByWithRelationInput, {nullable:true})
    scryfallCard?: ScryfallCardOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    scryfallCardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collectorNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isBorderless?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isShowcase?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPaper?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canBeFoil?: keyof typeof SortOrder;

    @Field(() => ScryfallPriceOrderByWithRelationInput, {nullable:true})
    currentPrice?: ScryfallPriceOrderByWithRelationInput;

    @Field(() => CardsInCollectionOrderByRelationAggregateInput, {nullable:true})
    collections?: CardsInCollectionOrderByRelationAggregateInput;
}
