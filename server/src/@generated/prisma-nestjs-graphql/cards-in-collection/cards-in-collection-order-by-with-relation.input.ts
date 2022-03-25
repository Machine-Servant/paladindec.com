import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CardOrderByWithRelationInput } from '../card/card-order-by-with-relation.input';
import { CollectionOrderByWithRelationInput } from '../collection/collection-order-by-with-relation.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';

@InputType()
export class CardsInCollectionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => CardOrderByWithRelationInput, { nullable: true })
  card?: CardOrderByWithRelationInput;

  @Field(() => CollectionOrderByWithRelationInput, { nullable: true })
  collection?: CollectionOrderByWithRelationInput;

  @Field(() => TagOrderByRelationAggregateInput, { nullable: true })
  tags?: TagOrderByRelationAggregateInput;
}
