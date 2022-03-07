import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallSetSumAggregate {
  @Field(() => Int, { nullable: true })
  tcgPlayerId?: number;

  @Field(() => Int, { nullable: true })
  cardCount?: number;

  @Field(() => Int, { nullable: true })
  printedSize?: number;
}
