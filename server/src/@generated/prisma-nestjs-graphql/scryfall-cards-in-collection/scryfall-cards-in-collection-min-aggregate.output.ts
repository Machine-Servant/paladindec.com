import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardsInCollectionMinAggregate {
  @Field(() => String, { nullable: true })
  cardId?: string;

  @Field(() => String, { nullable: true })
  collectionId?: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
