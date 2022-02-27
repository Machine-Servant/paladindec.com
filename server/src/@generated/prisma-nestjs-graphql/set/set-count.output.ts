import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SetCount {
  @Field(() => Int, { nullable: false })
  cards?: number;
}
