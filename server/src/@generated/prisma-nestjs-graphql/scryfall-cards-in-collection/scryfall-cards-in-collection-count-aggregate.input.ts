import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cardId?: true;

  @Field(() => Boolean, { nullable: true })
  collectionId?: true;

  @Field(() => Boolean, { nullable: true })
  count?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}