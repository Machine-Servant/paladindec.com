import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { CollectionOrderByWithRelationInput } from '../collection/collection-order-by-with-relation.input';

@InputType()
export class ScryfallCardsInCollectionOrderByWithRelationInput {
  @Field(() => ScryfallCardOrderByWithRelationInput, { nullable: true })
  card?: ScryfallCardOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;

  @Field(() => CollectionOrderByWithRelationInput, { nullable: true })
  collection?: CollectionOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  collectionId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;
}
