import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CardsInCollectionCountOrderByAggregateInput } from './cards-in-collection-count-order-by-aggregate.input';
import { CardsInCollectionAvgOrderByAggregateInput } from './cards-in-collection-avg-order-by-aggregate.input';
import { CardsInCollectionMaxOrderByAggregateInput } from './cards-in-collection-max-order-by-aggregate.input';
import { CardsInCollectionMinOrderByAggregateInput } from './cards-in-collection-min-order-by-aggregate.input';
import { CardsInCollectionSumOrderByAggregateInput } from './cards-in-collection-sum-order-by-aggregate.input';

@InputType()
export class CardsInCollectionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => CardsInCollectionCountOrderByAggregateInput, { nullable: true })
  _count?: CardsInCollectionCountOrderByAggregateInput;

  @Field(() => CardsInCollectionAvgOrderByAggregateInput, { nullable: true })
  _avg?: CardsInCollectionAvgOrderByAggregateInput;

  @Field(() => CardsInCollectionMaxOrderByAggregateInput, { nullable: true })
  _max?: CardsInCollectionMaxOrderByAggregateInput;

  @Field(() => CardsInCollectionMinOrderByAggregateInput, { nullable: true })
  _min?: CardsInCollectionMinOrderByAggregateInput;

  @Field(() => CardsInCollectionSumOrderByAggregateInput, { nullable: true })
  _sum?: CardsInCollectionSumOrderByAggregateInput;
}
