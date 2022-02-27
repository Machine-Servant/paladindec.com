import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CardFacesCountOrderByAggregateInput } from './card-faces-count-order-by-aggregate.input';
import { CardFacesAvgOrderByAggregateInput } from './card-faces-avg-order-by-aggregate.input';
import { CardFacesMaxOrderByAggregateInput } from './card-faces-max-order-by-aggregate.input';
import { CardFacesMinOrderByAggregateInput } from './card-faces-min-order-by-aggregate.input';
import { CardFacesSumOrderByAggregateInput } from './card-faces-sum-order-by-aggregate.input';

@InputType()
export class CardFacesOrderByWithAggregationInput {
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

  @Field(() => CardFacesCountOrderByAggregateInput, { nullable: true })
  _count?: CardFacesCountOrderByAggregateInput;

  @Field(() => CardFacesAvgOrderByAggregateInput, { nullable: true })
  _avg?: CardFacesAvgOrderByAggregateInput;

  @Field(() => CardFacesMaxOrderByAggregateInput, { nullable: true })
  _max?: CardFacesMaxOrderByAggregateInput;

  @Field(() => CardFacesMinOrderByAggregateInput, { nullable: true })
  _min?: CardFacesMinOrderByAggregateInput;

  @Field(() => CardFacesSumOrderByAggregateInput, { nullable: true })
  _sum?: CardFacesSumOrderByAggregateInput;
}
