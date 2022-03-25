import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutCollectionsInput } from '../card/card-create-nested-one-without-collections.input';
import { TagCreateNestedManyWithoutCardsInput } from '../tag/tag-create-nested-many-without-cards.input';

@InputType()
export class CardsInCollectionCreateWithoutCollectionInput {
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

  @Field(() => CardCreateNestedOneWithoutCollectionsInput, { nullable: false })
  card!: CardCreateNestedOneWithoutCollectionsInput;

  @Field(() => TagCreateNestedManyWithoutCardsInput, { nullable: true })
  tags?: TagCreateNestedManyWithoutCardsInput;
}
