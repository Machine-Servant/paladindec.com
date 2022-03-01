import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  count?: true;
}
