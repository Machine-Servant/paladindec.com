import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereInput } from './related-card-where.input';
import { RelatedCardOrderByWithAggregationInput } from './related-card-order-by-with-aggregation.input';
import { RelatedCardScalarFieldEnum } from './related-card-scalar-field.enum';
import { RelatedCardScalarWhereWithAggregatesInput } from './related-card-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RelatedCardCountAggregateInput } from './related-card-count-aggregate.input';
import { RelatedCardMinAggregateInput } from './related-card-min-aggregate.input';
import { RelatedCardMaxAggregateInput } from './related-card-max-aggregate.input';

@ArgsType()
export class RelatedCardGroupByArgs {
  @Field(() => RelatedCardWhereInput, { nullable: true })
  where?: RelatedCardWhereInput;

  @Field(() => [RelatedCardOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RelatedCardOrderByWithAggregationInput>;

  @Field(() => [RelatedCardScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RelatedCardScalarFieldEnum>;

  @Field(() => RelatedCardScalarWhereWithAggregatesInput, { nullable: true })
  having?: RelatedCardScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => RelatedCardCountAggregateInput, { nullable: true })
  _count?: RelatedCardCountAggregateInput;

  @Field(() => RelatedCardMinAggregateInput, { nullable: true })
  _min?: RelatedCardMinAggregateInput;

  @Field(() => RelatedCardMaxAggregateInput, { nullable: true })
  _max?: RelatedCardMaxAggregateInput;
}
