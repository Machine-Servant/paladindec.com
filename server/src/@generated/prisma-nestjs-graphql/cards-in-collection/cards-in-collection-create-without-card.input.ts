import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CollectionCreateNestedOneWithoutCardsInput } from '../collection/collection-create-nested-one-without-cards.input';
import { TagCreateNestedManyWithoutCardsInput } from '../tag/tag-create-nested-many-without-cards.input';

@InputType()
export class CardsInCollectionCreateWithoutCardInput {
  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: true })
  isEtched?: boolean;

  @Field(() => Boolean, { nullable: true })
  isFoil?: boolean;

  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => CollectionCreateNestedOneWithoutCardsInput, { nullable: false })
  collection!: CollectionCreateNestedOneWithoutCardsInput;

  @Field(() => TagCreateNestedManyWithoutCardsInput, { nullable: true })
  tags?: TagCreateNestedManyWithoutCardsInput;
}
