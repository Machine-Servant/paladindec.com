import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  cardId?: true;

  @Field(() => Boolean, { nullable: true })
  collectionId?: true;

  @Field(() => Boolean, { nullable: true })
  isFoil?: true;

  @Field(() => Boolean, { nullable: true })
  isEtched?: true;

  @Field(() => Boolean, { nullable: true })
  count?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  updatedAt?: true;
}
