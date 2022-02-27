import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereInput } from './related-card-where.input';
import { RelatedCardOrderByWithRelationInput } from './related-card-order-by-with-relation.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RelatedCardCountAggregateInput } from './related-card-count-aggregate.input';
import { RelatedCardMinAggregateInput } from './related-card-min-aggregate.input';
import { RelatedCardMaxAggregateInput } from './related-card-max-aggregate.input';

@ArgsType()
export class RelatedCardAggregateArgs {
  @Field(() => RelatedCardWhereInput, { nullable: true })
  where?: RelatedCardWhereInput;

  @Field(() => [RelatedCardOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RelatedCardOrderByWithRelationInput>;

  @Field(() => RelatedCardWhereUniqueInput, { nullable: true })
  cursor?: RelatedCardWhereUniqueInput;

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
