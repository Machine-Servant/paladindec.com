import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardWhereInput } from './scryfall-related-card-where.input';
import { ScryfallRelatedCardOrderByWithAggregationInput } from './scryfall-related-card-order-by-with-aggregation.input';
import { ScryfallRelatedCardScalarFieldEnum } from './scryfall-related-card-scalar-field.enum';
import { ScryfallRelatedCardScalarWhereWithAggregatesInput } from './scryfall-related-card-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallRelatedCardCountAggregateInput } from './scryfall-related-card-count-aggregate.input';
import { ScryfallRelatedCardMinAggregateInput } from './scryfall-related-card-min-aggregate.input';
import { ScryfallRelatedCardMaxAggregateInput } from './scryfall-related-card-max-aggregate.input';

@ArgsType()
export class ScryfallRelatedCardGroupByArgs {
  @Field(() => ScryfallRelatedCardWhereInput, { nullable: true })
  where?: ScryfallRelatedCardWhereInput;

  @Field(() => [ScryfallRelatedCardOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallRelatedCardOrderByWithAggregationInput>;

  @Field(() => [ScryfallRelatedCardScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScryfallRelatedCardScalarFieldEnum>;

  @Field(() => ScryfallRelatedCardScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ScryfallRelatedCardScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ScryfallRelatedCardCountAggregateInput, { nullable: true })
  _count?: ScryfallRelatedCardCountAggregateInput;

  @Field(() => ScryfallRelatedCardMinAggregateInput, { nullable: true })
  _min?: ScryfallRelatedCardMinAggregateInput;

  @Field(() => ScryfallRelatedCardMaxAggregateInput, { nullable: true })
  _max?: ScryfallRelatedCardMaxAggregateInput;
}
