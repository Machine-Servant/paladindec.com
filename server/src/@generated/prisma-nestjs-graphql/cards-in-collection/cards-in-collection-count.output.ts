import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardsInCollectionCount {
  @Field(() => Int, { nullable: false })
  tags?: number;
}
