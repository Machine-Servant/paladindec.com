import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereInput } from './scryfall-card-face-where.input';
import { ScryfallCardFaceOrderByWithAggregationInput } from './scryfall-card-face-order-by-with-aggregation.input';
import { ScryfallCardFaceScalarFieldEnum } from './scryfall-card-face-scalar-field.enum';
import { ScryfallCardFaceScalarWhereWithAggregatesInput } from './scryfall-card-face-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardFaceCountAggregateInput } from './scryfall-card-face-count-aggregate.input';
import { ScryfallCardFaceAvgAggregateInput } from './scryfall-card-face-avg-aggregate.input';
import { ScryfallCardFaceSumAggregateInput } from './scryfall-card-face-sum-aggregate.input';
import { ScryfallCardFaceMinAggregateInput } from './scryfall-card-face-min-aggregate.input';
import { ScryfallCardFaceMaxAggregateInput } from './scryfall-card-face-max-aggregate.input';

@ArgsType()
export class ScryfallCardFaceGroupByArgs {
  @Field(() => ScryfallCardFaceWhereInput, { nullable: true })
  where?: ScryfallCardFaceWhereInput;

  @Field(() => [ScryfallCardFaceOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallCardFaceOrderByWithAggregationInput>;

  @Field(() => [ScryfallCardFaceScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScryfallCardFaceScalarFieldEnum>;

  @Field(() => ScryfallCardFaceScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ScryfallCardFaceScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ScryfallCardFaceCountAggregateInput, { nullable: true })
  _count?: ScryfallCardFaceCountAggregateInput;

  @Field(() => ScryfallCardFaceAvgAggregateInput, { nullable: true })
  _avg?: ScryfallCardFaceAvgAggregateInput;

  @Field(() => ScryfallCardFaceSumAggregateInput, { nullable: true })
  _sum?: ScryfallCardFaceSumAggregateInput;

  @Field(() => ScryfallCardFaceMinAggregateInput, { nullable: true })
  _min?: ScryfallCardFaceMinAggregateInput;

  @Field(() => ScryfallCardFaceMaxAggregateInput, { nullable: true })
  _max?: ScryfallCardFaceMaxAggregateInput;
}
