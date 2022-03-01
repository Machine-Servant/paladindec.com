import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCountAggregate } from './scryfall-cards-in-collection-count-aggregate.output';
import { ScryfallCardsInCollectionAvgAggregate } from './scryfall-cards-in-collection-avg-aggregate.output';
import { ScryfallCardsInCollectionSumAggregate } from './scryfall-cards-in-collection-sum-aggregate.output';
import { ScryfallCardsInCollectionMinAggregate } from './scryfall-cards-in-collection-min-aggregate.output';
import { ScryfallCardsInCollectionMaxAggregate } from './scryfall-cards-in-collection-max-aggregate.output';

@ObjectType()
export class ScryfallCardsInCollectionGroupBy {
  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => ScryfallCardsInCollectionCountAggregate, { nullable: true })
  _count?: ScryfallCardsInCollectionCountAggregate;

  @Field(() => ScryfallCardsInCollectionAvgAggregate, { nullable: true })
  _avg?: ScryfallCardsInCollectionAvgAggregate;

  @Field(() => ScryfallCardsInCollectionSumAggregate, { nullable: true })
  _sum?: ScryfallCardsInCollectionSumAggregate;

  @Field(() => ScryfallCardsInCollectionMinAggregate, { nullable: true })
  _min?: ScryfallCardsInCollectionMinAggregate;

  @Field(() => ScryfallCardsInCollectionMaxAggregate, { nullable: true })
  _max?: ScryfallCardsInCollectionMaxAggregate;
}
