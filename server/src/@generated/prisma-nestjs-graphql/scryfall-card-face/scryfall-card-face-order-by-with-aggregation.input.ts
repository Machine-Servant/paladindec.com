import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallCardFaceCountOrderByAggregateInput } from './scryfall-card-face-count-order-by-aggregate.input';
import { ScryfallCardFaceAvgOrderByAggregateInput } from './scryfall-card-face-avg-order-by-aggregate.input';
import { ScryfallCardFaceMaxOrderByAggregateInput } from './scryfall-card-face-max-order-by-aggregate.input';
import { ScryfallCardFaceMinOrderByAggregateInput } from './scryfall-card-face-min-order-by-aggregate.input';
import { ScryfallCardFaceSumOrderByAggregateInput } from './scryfall-card-face-sum-order-by-aggregate.input';

@InputType()
export class ScryfallCardFaceOrderByWithAggregationInput {
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

  @Field(() => ScryfallCardFaceCountOrderByAggregateInput, { nullable: true })
  _count?: ScryfallCardFaceCountOrderByAggregateInput;

  @Field(() => ScryfallCardFaceAvgOrderByAggregateInput, { nullable: true })
  _avg?: ScryfallCardFaceAvgOrderByAggregateInput;

  @Field(() => ScryfallCardFaceMaxOrderByAggregateInput, { nullable: true })
  _max?: ScryfallCardFaceMaxOrderByAggregateInput;

  @Field(() => ScryfallCardFaceMinOrderByAggregateInput, { nullable: true })
  _min?: ScryfallCardFaceMinOrderByAggregateInput;

  @Field(() => ScryfallCardFaceSumOrderByAggregateInput, { nullable: true })
  _sum?: ScryfallCardFaceSumOrderByAggregateInput;
}
