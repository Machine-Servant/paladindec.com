import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallSetMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  mtgoCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  arenaCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tcgPlayerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  setType?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  releasedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  blockCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  block?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  parentSetCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cardCount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  printedSize?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isDigital?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isFoilOnly?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isNonFoilOnly?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  scryfallUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  uri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  iconSvgUri?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  searchUri?: keyof typeof SortOrder;
}
