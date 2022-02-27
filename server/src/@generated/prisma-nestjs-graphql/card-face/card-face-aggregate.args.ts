import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereInput } from './card-face-where.input';
import { CardFaceOrderByWithRelationInput } from './card-face-order-by-with-relation.input';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardFaceCountAggregateInput } from './card-face-count-aggregate.input';
import { CardFaceAvgAggregateInput } from './card-face-avg-aggregate.input';
import { CardFaceSumAggregateInput } from './card-face-sum-aggregate.input';
import { CardFaceMinAggregateInput } from './card-face-min-aggregate.input';
import { CardFaceMaxAggregateInput } from './card-face-max-aggregate.input';

@ArgsType()
export class CardFaceAggregateArgs {
  @Field(() => CardFaceWhereInput, { nullable: true })
  where?: CardFaceWhereInput;

  @Field(() => [CardFaceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CardFaceOrderByWithRelationInput>;

  @Field(() => CardFaceWhereUniqueInput, { nullable: true })
  cursor?: CardFaceWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CardFaceCountAggregateInput, { nullable: true })
  _count?: CardFaceCountAggregateInput;

  @Field(() => CardFaceAvgAggregateInput, { nullable: true })
  _avg?: CardFaceAvgAggregateInput;

  @Field(() => CardFaceSumAggregateInput, { nullable: true })
  _sum?: CardFaceSumAggregateInput;

  @Field(() => CardFaceMinAggregateInput, { nullable: true })
  _min?: CardFaceMinAggregateInput;

  @Field(() => CardFaceMaxAggregateInput, { nullable: true })
  _max?: CardFaceMaxAggregateInput;
}
