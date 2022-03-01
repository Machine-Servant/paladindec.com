import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardRelationFilter } from '../scryfall-card/scryfall-card-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CollectionRelationFilter } from '../collection/collection-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ScryfallCardsInCollectionWhereInput {
  @Field(() => [ScryfallCardsInCollectionWhereInput], { nullable: true })
  AND?: Array<ScryfallCardsInCollectionWhereInput>;

  @Field(() => [ScryfallCardsInCollectionWhereInput], { nullable: true })
  OR?: Array<ScryfallCardsInCollectionWhereInput>;

  @Field(() => [ScryfallCardsInCollectionWhereInput], { nullable: true })
  NOT?: Array<ScryfallCardsInCollectionWhereInput>;

  @Field(() => ScryfallCardRelationFilter, { nullable: true })
  card?: ScryfallCardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => CollectionRelationFilter, { nullable: true })
  collection?: CollectionRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  collectionId?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;
}
