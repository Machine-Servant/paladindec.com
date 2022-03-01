import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardCount {
  @Field(() => Int, { nullable: false })
  collections?: number;
}
