import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallCard } from '../scryfall-card/scryfall-card.model';
import { Collection } from '../collection/collection.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardsInCollection {
  @Field(() => ScryfallCard, { nullable: false })
  card?: ScryfallCard;

  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => Collection, { nullable: false })
  collection?: Collection;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  count!: number;
}
