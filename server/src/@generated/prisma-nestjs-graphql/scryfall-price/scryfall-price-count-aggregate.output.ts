import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallPriceCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  date!: number;

  @Field(() => Int, { nullable: false })
  eur!: number;

  @Field(() => Int, { nullable: false })
  tix!: number;

  @Field(() => Int, { nullable: false })
  usd!: number;

  @Field(() => Int, { nullable: false })
  eurFoil!: number;

  @Field(() => Int, { nullable: false })
  usdFoil!: number;

  @Field(() => Int, { nullable: false })
  usdEtched!: number;

  @Field(() => Int, { nullable: false })
  cardId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
