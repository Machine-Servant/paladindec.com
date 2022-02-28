import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallPriceMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  eur?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tix?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  eurFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usdFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  usdEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
}
