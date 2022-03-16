import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardOrderByWithRelationInput } from '../card/card-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { CollectionOrderByWithRelationInput } from '../collection/collection-order-by-with-relation.input';

@InputType()
export class CardsInCollectionOrderByWithRelationInput {
  @Field(() => CardOrderByWithRelationInput, { nullable: true })
  card?: CardOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => CollectionOrderByWithRelationInput, { nullable: true })
  collection?: CollectionOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isFoil?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isEtched?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
