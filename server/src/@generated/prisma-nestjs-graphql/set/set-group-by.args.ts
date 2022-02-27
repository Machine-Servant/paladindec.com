import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetWhereInput } from './set-where.input';
import { SetOrderByWithAggregationInput } from './set-order-by-with-aggregation.input';
import { SetScalarFieldEnum } from './set-scalar-field.enum';
import { SetScalarWhereWithAggregatesInput } from './set-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SetCountAggregateInput } from './set-count-aggregate.input';
import { SetAvgAggregateInput } from './set-avg-aggregate.input';
import { SetSumAggregateInput } from './set-sum-aggregate.input';
import { SetMinAggregateInput } from './set-min-aggregate.input';
import { SetMaxAggregateInput } from './set-max-aggregate.input';

@ArgsType()
export class SetGroupByArgs {
  @Field(() => SetWhereInput, { nullable: true })
  where?: SetWhereInput;

  @Field(() => [SetOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<SetOrderByWithAggregationInput>;

  @Field(() => [SetScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof SetScalarFieldEnum>;

  @Field(() => SetScalarWhereWithAggregatesInput, { nullable: true })
  having?: SetScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => SetCountAggregateInput, { nullable: true })
  _count?: SetCountAggregateInput;

  @Field(() => SetAvgAggregateInput, { nullable: true })
  _avg?: SetAvgAggregateInput;

  @Field(() => SetSumAggregateInput, { nullable: true })
  _sum?: SetSumAggregateInput;

  @Field(() => SetMinAggregateInput, { nullable: true })
  _min?: SetMinAggregateInput;

  @Field(() => SetMaxAggregateInput, { nullable: true })
  _max?: SetMaxAggregateInput;
}
