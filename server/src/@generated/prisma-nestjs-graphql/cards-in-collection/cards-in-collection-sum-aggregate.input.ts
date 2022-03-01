import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  count?: true;
}
