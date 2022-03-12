import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CardsInCollection } from '../cards-in-collection/cards-in-collection.model';
import { CollectionCount } from './collection-count.output';

@ObjectType()
export class Collection {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => User, { nullable: false })
  user?: User;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => [CardsInCollection], { nullable: true })
  cards?: Array<CardsInCollection>;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => CollectionCount, { nullable: false })
  _count?: CollectionCount;
}
