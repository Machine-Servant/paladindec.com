import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagUncheckedCreateNestedManyWithoutCardsInput } from '../tag/tag-unchecked-create-nested-many-without-cards.input';

@InputType()
export class CardsInCollectionUncheckedCreateWithoutCardInput {
  @Field(() => String, { nullable: false })
  collectionId!: string;

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

  @Field(() => TagUncheckedCreateNestedManyWithoutCardsInput, {
    nullable: true,
  })
  tags?: TagUncheckedCreateNestedManyWithoutCardsInput;
}
