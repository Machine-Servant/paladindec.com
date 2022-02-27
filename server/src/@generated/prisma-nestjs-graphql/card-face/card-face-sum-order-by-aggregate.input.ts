import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CardFaceSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  cmc?: keyof typeof SortOrder;
}
