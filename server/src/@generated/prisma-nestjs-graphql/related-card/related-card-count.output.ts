import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RelatedCardCount {
  @Field(() => Int, { nullable: false })
  card?: number;
}
