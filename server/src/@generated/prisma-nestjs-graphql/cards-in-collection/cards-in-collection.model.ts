import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Card } from '../card/card.model';
import { Collection } from '../collection/collection.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardsInCollection {
  @Field(() => Card, { nullable: false })
  card?: Card;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => Collection, { nullable: false })
  collection?: Collection;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  count!: number;
}
