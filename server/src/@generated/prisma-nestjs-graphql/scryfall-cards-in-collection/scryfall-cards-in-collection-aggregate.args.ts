import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';
import { ScryfallCardsInCollectionOrderByWithRelationInput } from './scryfall-cards-in-collection-order-by-with-relation.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCountAggregateInput } from './scryfall-cards-in-collection-count-aggregate.input';
import { ScryfallCardsInCollectionAvgAggregateInput } from './scryfall-cards-in-collection-avg-aggregate.input';
import { ScryfallCardsInCollectionSumAggregateInput } from './scryfall-cards-in-collection-sum-aggregate.input';
import { ScryfallCardsInCollectionMinAggregateInput } from './scryfall-cards-in-collection-min-aggregate.input';
import { ScryfallCardsInCollectionMaxAggregateInput } from './scryfall-cards-in-collection-max-aggregate.input';

@ArgsType()
export class ScryfallCardsInCollectionAggregateArgs {
  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  where?: ScryfallCardsInCollectionWhereInput;

  @Field(() => [ScryfallCardsInCollectionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallCardsInCollectionOrderByWithRelationInput>;

  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: true })
  cursor?: ScryfallCardsInCollectionWhereUniqueInput;

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
