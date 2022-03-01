import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { CollectionOrderByWithAggregationInput } from './collection-order-by-with-aggregation.input';
import { CollectionScalarFieldEnum } from './collection-scalar-field.enum';
import { CollectionScalarWhereWithAggregatesInput } from './collection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CollectionCountAggregateInput } from './collection-count-aggregate.input';
import { CollectionMinAggregateInput } from './collection-min-aggregate.input';
import { CollectionMaxAggregateInput } from './collection-max-aggregate.input';

@ArgsType()
export class CollectionGroupByArgs {
  @Field(() => CollectionWhereInput, { nullable: true })
  where?: CollectionWhereInput;

  @Field(() => [CollectionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CollectionOrderByWithAggregationInput>;

  @Field(() => [CollectionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CollectionScalarFieldEnum>;

  @Field(() => CollectionScalarWhereWithAggregatesInput, { nullable: true })
  having?: CollectionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CollectionCountAggregateInput, { nullable: true })
  _count?: CollectionCountAggregateInput;

  @Field(() => CollectionMinAggregateInput, { nullable: true })
  _min?: CollectionMinAggregateInput;

  @Field(() => CollectionMaxAggregateInput, { nullable: true })
  _max?: CollectionMaxAggregateInput;
}
