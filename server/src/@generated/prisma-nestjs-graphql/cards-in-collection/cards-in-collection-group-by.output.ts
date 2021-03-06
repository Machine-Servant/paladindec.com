import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CardsInCollectionCountAggregate } from './cards-in-collection-count-aggregate.output';
import { CardsInCollectionAvgAggregate } from './cards-in-collection-avg-aggregate.output';
import { CardsInCollectionSumAggregate } from './cards-in-collection-sum-aggregate.output';
import { CardsInCollectionMinAggregate } from './cards-in-collection-min-aggregate.output';
import { CardsInCollectionMaxAggregate } from './cards-in-collection-max-aggregate.output';

@ObjectType()
export class CardsInCollectionGroupBy {
  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => Boolean, { nullable: false })
  isEtched!: boolean;

  @Field(() => Boolean, { nullable: false })
  isFoil!: boolean;

  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => CardsInCollectionCountAggregate, { nullable: true })
  _count?: CardsInCollectionCountAggregate;

  @Field(() => CardsInCollectionAvgAggregate, { nullable: true })
  _avg?: CardsInCollectionAvgAggregate;

  @Field(() => CardsInCollectionSumAggregate, { nullable: true })
  _sum?: CardsInCollectionSumAggregate;

  @Field(() => CardsInCollectionMinAggregate, { nullable: true })
  _min?: CardsInCollectionMinAggregate;

  @Field(() => CardsInCollectionMaxAggregate, { nullable: true })
  _max?: CardsInCollectionMaxAggregate;
}
