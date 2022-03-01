import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionUncheckedCreateWithoutCollectionInput {
  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
