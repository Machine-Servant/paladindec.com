import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallCardsInCollectionAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;
}
