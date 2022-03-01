import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Collection } from '../collection/collection.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  externalAuthId!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => [Collection], { nullable: true })
  collections?: Array<Collection>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
