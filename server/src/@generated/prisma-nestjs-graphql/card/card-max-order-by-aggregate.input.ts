import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallCardId?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isBorderless?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isShowcase?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectorNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isPaper?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  canBeNonFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isExtendedArt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isRetro?: keyof typeof SortOrder;
}
