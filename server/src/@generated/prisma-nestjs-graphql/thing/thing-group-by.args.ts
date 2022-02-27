import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereInput } from './thing-where.input';
import { ThingOrderByWithAggregationInput } from './thing-order-by-with-aggregation.input';
import { ThingScalarFieldEnum } from './thing-scalar-field.enum';
import { ThingScalarWhereWithAggregatesInput } from './thing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ThingCountAggregateInput } from './thing-count-aggregate.input';
import { ThingAvgAggregateInput } from './thing-avg-aggregate.input';
import { ThingSumAggregateInput } from './thing-sum-aggregate.input';
import { ThingMinAggregateInput } from './thing-min-aggregate.input';
import { ThingMaxAggregateInput } from './thing-max-aggregate.input';

@ArgsType()
export class ThingGroupByArgs {
  @Field(() => ThingWhereInput, { nullable: true })
  where?: ThingWhereInput;

  @Field(() => [ThingOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ThingOrderByWithAggregationInput>;

  @Field(() => [ThingScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ThingScalarFieldEnum>;

  @Field(() => ThingScalarWhereWithAggregatesInput, { nullable: true })
  having?: ThingScalarWhereWithAggregatesInput;

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
