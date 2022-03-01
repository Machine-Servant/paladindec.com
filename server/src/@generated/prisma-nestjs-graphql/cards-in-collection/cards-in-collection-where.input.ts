import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardRelationFilter } from '../card/card-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CollectionRelationFilter } from '../collection/collection-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class CardsInCollectionWhereInput {
  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  AND?: Array<CardsInCollectionWhereInput>;

  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  OR?: Array<CardsInCollectionWhereInput>;

  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  NOT?: Array<CardsInCollectionWhereInput>;

  @Field(() => CardRelationFilter, { nullable: true })
  card?: CardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => CollectionRelationFilter, { nullable: true })
  collection?: CollectionRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  collectionId?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;
}
