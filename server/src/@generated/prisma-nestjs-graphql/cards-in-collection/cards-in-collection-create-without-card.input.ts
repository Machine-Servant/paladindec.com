import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateNestedOneWithoutCardsInput } from '../collection/collection-create-nested-one-without-cards.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCreateWithoutCardInput {
  @Field(() => CollectionCreateNestedOneWithoutCardsInput, { nullable: false })
  collection!: CollectionCreateNestedOneWithoutCardsInput;

  @Field(() => Boolean, { nullable: true })
  isFoil?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEtched?: boolean;

  @Field(() => Int, { nullable: true })
  count?: number;
}
