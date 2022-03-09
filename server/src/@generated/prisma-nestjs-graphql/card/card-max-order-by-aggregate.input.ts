import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CardMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallCardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectorNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isBorderless?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isShowcase?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isPaper?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeFoil?: keyof typeof SortOrder;
}
