import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereInput } from './card-faces-where.input';
import { CardFacesOrderByWithAggregationInput } from './card-faces-order-by-with-aggregation.input';
import { CardFacesScalarFieldEnum } from './card-faces-scalar-field.enum';
import { CardFacesScalarWhereWithAggregatesInput } from './card-faces-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CardFacesCountAggregateInput } from './card-faces-count-aggregate.input';
import { CardFacesAvgAggregateInput } from './card-faces-avg-aggregate.input';
import { CardFacesSumAggregateInput } from './card-faces-sum-aggregate.input';
import { CardFacesMinAggregateInput } from './card-faces-min-aggregate.input';
import { CardFacesMaxAggregateInput } from './card-faces-max-aggregate.input';

@ArgsType()
export class CardFacesGroupByArgs {
  @Field(() => CardFacesWhereInput, { nullable: true })
  where?: CardFacesWhereInput;

  @Field(() => [CardFacesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CardFacesOrderByWithAggregationInput>;

  @Field(() => [CardFacesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CardFacesScalarFieldEnum>;

  @Field(() => CardFacesScalarWhereWithAggregatesInput, { nullable: true })
  having?: CardFacesScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CardFacesCountAggregateInput, { nullable: true })
  _count?: CardFacesCountAggregateInput;

  @Field(() => CardFacesAvgAggregateInput, { nullable: true })
  _avg?: CardFacesAvgAggregateInput;

  @Field(() => CardFacesSumAggregateInput, { nullable: true })
  _sum?: CardFacesSumAggregateInput;

  @Field(() => CardFacesMinAggregateInput, { nullable: true })
  _min?: CardFacesMinAggregateInput;

  @Field(() => CardFacesMaxAggregateInput, { nullable: true })
  _max?: CardFacesMaxAggregateInput;
}
