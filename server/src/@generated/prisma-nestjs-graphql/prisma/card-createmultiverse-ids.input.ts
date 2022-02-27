import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CardCreatemultiverseIdsInput {
  @Field(() => [Int], { nullable: false })
  set!: Array<number>;
}
