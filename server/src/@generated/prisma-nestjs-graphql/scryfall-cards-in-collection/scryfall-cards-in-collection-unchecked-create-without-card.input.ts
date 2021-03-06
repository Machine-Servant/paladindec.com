import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ScryfallCardsInCollectionUncheckedCreateWithoutCardInput {
  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
