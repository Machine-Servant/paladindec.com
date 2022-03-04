import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CardsInCollectionCardPrice {
  @Field(() => Number)
  usd: number;

  @Field(() => Number)
  eur: number;
}
