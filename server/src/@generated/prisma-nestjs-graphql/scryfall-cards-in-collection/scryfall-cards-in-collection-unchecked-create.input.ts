import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  cardId!: string;

  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
