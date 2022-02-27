import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereInput } from './thing-where.input';
import { ThingOrderByWithRelationInput } from './thing-order-by-with-relation.input';
import { ThingWhereUniqueInput } from './thing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThingCountAggregateInput } from './thing-count-aggregate.input';
import { ThingAvgAggregateInput } from './thing-avg-aggregate.input';
import { ThingSumAggregateInput } from './thing-sum-aggregate.input';
import { ThingMinAggregateInput } from './thing-min-aggregate.input';
import { ThingMaxAggregateInput } from './thing-max-aggregate.input';

@ArgsType()
export class ThingAggregateArgs {
  @Field(() => ThingWhereInput, { nullable: true })
  where?: ThingWhereInput;

  @Field(() => [ThingOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ThingOrderByWithRelationInput>;

  @Field(() => ThingWhereUniqueInput, { nullable: true })
  cursor?: ThingWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ThingCountAggregateInput, { nullable: true })
  _count?: ThingCountAggregateInput;

  @Field(() => ThingAvgAggregateInput, { nullable: true })
  _avg?: ThingAvgAggregateInput;

  @Field(() => ThingSumAggregateInput, { nullable: true })
  _sum?: ThingSumAggregateInput;

  @Field(() => ThingMinAggregateInput, { nullable: true })
  _min?: ThingMinAggregateInput;

  @Field(() => ThingMaxAggregateInput, { nullable: true })
  _max?: ThingMaxAggregateInput;
}
