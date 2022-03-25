import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { CardRelationFilter } from '../card/card-relation-filter.input';
import { CollectionRelationFilter } from '../collection/collection-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class CardsInCollectionWhereInput {
  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  AND?: Array<CardsInCollectionWhereInput>;

  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  OR?: Array<CardsInCollectionWhereInput>;

  @Field(() => [CardsInCollectionWhereInput], { nullable: true })
  NOT?: Array<CardsInCollectionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  collectionId?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  isEtched?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  isFoil?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => CardRelationFilter, { nullable: true })
  card?: CardRelationFilter;

  @Field(() => CollectionRelationFilter, { nullable: true })
  collection?: CollectionRelationFilter;

  @Field(() => TagListRelationFilter, { nullable: true })
  tags?: TagListRelationFilter;
}
