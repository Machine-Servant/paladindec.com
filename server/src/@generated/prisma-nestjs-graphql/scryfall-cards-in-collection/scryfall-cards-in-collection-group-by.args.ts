import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';
import { ScryfallCardsInCollectionOrderByWithAggregationInput } from './scryfall-cards-in-collection-order-by-with-aggregation.input';
import { ScryfallCardsInCollectionScalarFieldEnum } from './scryfall-cards-in-collection-scalar-field.enum';
import { ScryfallCardsInCollectionScalarWhereWithAggregatesInput } from './scryfall-cards-in-collection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCountAggregateInput } from './scryfall-cards-in-collection-count-aggregate.input';
import { ScryfallCardsInCollectionAvgAggregateInput } from './scryfall-cards-in-collection-avg-aggregate.input';
import { ScryfallCardsInCollectionSumAggregateInput } from './scryfall-cards-in-collection-sum-aggregate.input';
import { ScryfallCardsInCollectionMinAggregateInput } from './scryfall-cards-in-collection-min-aggregate.input';
import { ScryfallCardsInCollectionMaxAggregateInput } from './scryfall-cards-in-collection-max-aggregate.input';

@ArgsType()
export class ScryfallCardsInCollectionGroupByArgs {
  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  where?: ScryfallCardsInCollectionWhereInput;

  @Field(() => [ScryfallCardsInCollectionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallCardsInCollectionOrderByWithAggregationInput>;

  @Field(() => [ScryfallCardsInCollectionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScryfallCardsInCollectionScalarFieldEnum>;

  @Field(() => ScryfallCardsInCollectionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ScryfallCardsInCollectionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ScryfallCardsInCollectionCountAggregateInput, { nullable: true })
  _count?: ScryfallCardsInCollectionCountAggregateInput;

  @Field(() => ScryfallCardsInCollectionAvgAggregateInput, { nullable: true })
  _avg?: ScryfallCardsInCollectionAvgAggregateInput;

  @Field(() => ScryfallCardsInCollectionSumAggregateInput, { nullable: true })
  _sum?: ScryfallCardsInCollectionSumAggregateInput;

  @Field(() => ScryfallCardsInCollectionMinAggregateInput, { nullable: true })
  _min?: ScryfallCardsInCollectionMinAggregateInput;

  @Field(() => ScryfallCardsInCollectionMaxAggregateInput, { nullable: true })
  _max?: ScryfallCardsInCollectionMaxAggregateInput;
}
