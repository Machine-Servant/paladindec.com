import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Collection } from '../collection/collection.model';
import { Tag } from '../tag/tag.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => String, { nullable: false })
  externalAuthId!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => [Collection], { nullable: true })
  collections?: Array<Collection>;

  @Field(() => [Tag], { nullable: true })
  Tag?: Array<Tag>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
