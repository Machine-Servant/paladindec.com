import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereInput } from './card-faces-where.input';
import { CardFacesOrderByWithRelationInput } from './card-faces-order-by-with-relation.input';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardFacesCountAggregateInput } from './card-faces-count-aggregate.input';
import { CardFacesAvgAggregateInput } from './card-faces-avg-aggregate.input';
import { CardFacesSumAggregateInput } from './card-faces-sum-aggregate.input';
import { CardFacesMinAggregateInput } from './card-faces-min-aggregate.input';
import { CardFacesMaxAggregateInput } from './card-faces-max-aggregate.input';

@ArgsType()
export class CardFacesAggregateArgs {
  @Field(() => CardFacesWhereInput, { nullable: true })
  where?: CardFacesWhereInput;

  @Field(() => [CardFacesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CardFacesOrderByWithRelationInput>;

  @Field(() => CardFacesWhereUniqueInput, { nullable: true })
  cursor?: CardFacesWhereUniqueInput;

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
