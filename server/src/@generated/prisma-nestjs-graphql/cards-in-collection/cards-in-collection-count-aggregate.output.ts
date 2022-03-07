import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardsInCollectionCountAggregate {
  @Field(() => Int, { nullable: false })
  cardId!: number;

  @Field(() => Int, { nullable: false })
  collectionId!: number;

  @Field(() => Int, { nullable: false })
  isFoil!: number;

  @Field(() => Int, { nullable: false })
  isEtched!: number;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
