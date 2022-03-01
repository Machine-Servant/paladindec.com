import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallCardsInCollectionCountOrderByAggregateInput } from './scryfall-cards-in-collection-count-order-by-aggregate.input';
import { ScryfallCardsInCollectionAvgOrderByAggregateInput } from './scryfall-cards-in-collection-avg-order-by-aggregate.input';
import { ScryfallCardsInCollectionMaxOrderByAggregateInput } from './scryfall-cards-in-collection-max-order-by-aggregate.input';
import { ScryfallCardsInCollectionMinOrderByAggregateInput } from './scryfall-cards-in-collection-min-order-by-aggregate.input';
import { ScryfallCardsInCollectionSumOrderByAggregateInput } from './scryfall-cards-in-collection-sum-order-by-aggregate.input';

@InputType()
export class ScryfallCardsInCollectionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => ScryfallCardsInCollectionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ScryfallCardsInCollectionCountOrderByAggregateInput;

  @Field(() => ScryfallCardsInCollectionAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ScryfallCardsInCollectionAvgOrderByAggregateInput;

  @Field(() => ScryfallCardsInCollectionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ScryfallCardsInCollectionMaxOrderByAggregateInput;

  @Field(() => ScryfallCardsInCollectionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ScryfallCardsInCollectionMinOrderByAggregateInput;

  @Field(() => ScryfallCardsInCollectionSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ScryfallCardsInCollectionSumOrderByAggregateInput;
}
