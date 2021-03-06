import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { CollectionListRelationFilter } from '../collection/collection-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  externalAuthId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => CollectionListRelationFilter, { nullable: true })
  collections?: CollectionListRelationFilter;

  @Field(() => TagListRelationFilter, { nullable: true })
  Tag?: TagListRelationFilter;
}
