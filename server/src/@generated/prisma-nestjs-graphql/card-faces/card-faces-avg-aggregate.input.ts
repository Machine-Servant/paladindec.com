import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardFacesAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cmc?: true;
}
