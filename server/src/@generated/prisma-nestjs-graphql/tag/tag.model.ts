import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CardsInCollection } from '../cards-in-collection/cards-in-collection.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => [CardsInCollection], { nullable: true })
  cards?: Array<CardsInCollection>;

  @Field(() => TagCount, { nullable: false })
  _count?: TagCount;
}
