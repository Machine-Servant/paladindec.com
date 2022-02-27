import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SetSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  tcgPlayerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardCount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedSize?: keyof typeof SortOrder;
}
