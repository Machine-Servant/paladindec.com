import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardFaceAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cmc?: true;
}
