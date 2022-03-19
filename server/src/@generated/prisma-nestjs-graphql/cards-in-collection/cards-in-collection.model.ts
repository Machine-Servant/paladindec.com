import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Card } from '../card/card.model';
import { Collection } from '../collection/collection.model';

@ObjectType()
export class CardsInCollection {
  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  count!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isEtched!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isFoil!: boolean;

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Card, { nullable: false })
  card?: Card;

  @Field(() => Collection, { nullable: false })
  collection?: Collection;
}
