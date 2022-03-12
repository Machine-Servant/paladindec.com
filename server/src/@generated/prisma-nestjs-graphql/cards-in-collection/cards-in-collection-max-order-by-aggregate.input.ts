import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
