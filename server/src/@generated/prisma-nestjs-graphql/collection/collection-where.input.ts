import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CardsInCollectionListRelationFilter } from '../cards-in-collection/cards-in-collection-list-relation-filter.input';

@InputType()
export class CollectionWhereInput {
  @Field(() => [CollectionWhereInput], { nullable: true })
  AND?: Array<CollectionWhereInput>;

  @Field(() => [CollectionWhereInput], { nullable: true })
  OR?: Array<CollectionWhereInput>;

  @Field(() => [CollectionWhereInput], { nullable: true })
  NOT?: Array<CollectionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;

  @Field(() => CardsInCollectionListRelationFilter, { nullable: true })
  cards?: CardsInCollectionListRelationFilter;
}
