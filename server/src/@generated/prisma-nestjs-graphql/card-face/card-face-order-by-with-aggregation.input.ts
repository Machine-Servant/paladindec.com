import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CardFaceCountOrderByAggregateInput } from './card-face-count-order-by-aggregate.input';
import { CardFaceAvgOrderByAggregateInput } from './card-face-avg-order-by-aggregate.input';
import { CardFaceMaxOrderByAggregateInput } from './card-face-max-order-by-aggregate.input';
import { CardFaceMinOrderByAggregateInput } from './card-face-min-order-by-aggregate.input';
import { CardFaceSumOrderByAggregateInput } from './card-face-sum-order-by-aggregate.input';

@InputType()
export class CardFaceOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  artist?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cmc?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  colorIndicator?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  colors?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  flavorText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  illustrationId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  imageUris?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  layout?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  loyalty?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  manaCost?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  oracleText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  power?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedText?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedTypeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  toughness?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  typeLine?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  watermark?: keyof typeof SortOrder;

  @Field(() => CardFaceCountOrderByAggregateInput, { nullable: true })
  _count?: CardFaceCountOrderByAggregateInput;

  @Field(() => CardFaceAvgOrderByAggregateInput, { nullable: true })
  _avg?: CardFaceAvgOrderByAggregateInput;

  @Field(() => CardFaceMaxOrderByAggregateInput, { nullable: true })
  _max?: CardFaceMaxOrderByAggregateInput;

  @Field(() => CardFaceMinOrderByAggregateInput, { nullable: true })
  _min?: CardFaceMinOrderByAggregateInput;

  @Field(() => CardFaceSumOrderByAggregateInput, { nullable: true })
  _sum?: CardFaceSumOrderByAggregateInput;
}
