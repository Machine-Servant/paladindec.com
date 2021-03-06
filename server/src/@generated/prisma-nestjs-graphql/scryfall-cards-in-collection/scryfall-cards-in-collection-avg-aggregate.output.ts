import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardsInCollectionAvgAggregate {
  @Field(() => Float, { nullable: true })
  count?: number;
}
