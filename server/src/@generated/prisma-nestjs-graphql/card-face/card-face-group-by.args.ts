import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereInput } from './card-face-where.input';
import { CardFaceOrderByWithAggregationInput } from './card-face-order-by-with-aggregation.input';
import { CardFaceScalarFieldEnum } from './card-face-scalar-field.enum';
import { CardFaceScalarWhereWithAggregatesInput } from './card-face-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CardFaceCountAggregateInput } from './card-face-count-aggregate.input';
import { CardFaceAvgAggregateInput } from './card-face-avg-aggregate.input';
import { CardFaceSumAggregateInput } from './card-face-sum-aggregate.input';
import { CardFaceMinAggregateInput } from './card-face-min-aggregate.input';
import { CardFaceMaxAggregateInput } from './card-face-max-aggregate.input';

@ArgsType()
export class CardFaceGroupByArgs {
  @Field(() => CardFaceWhereInput, { nullable: true })
  where?: CardFaceWhereInput;

  @Field(() => [CardFaceOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CardFaceOrderByWithAggregationInput>;

  @Field(() => [CardFaceScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CardFaceScalarFieldEnum>;

  @Field(() => CardFaceScalarWhereWithAggregatesInput, { nullable: true })
  having?: CardFaceScalarWhereWithAggregatesInput;

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
