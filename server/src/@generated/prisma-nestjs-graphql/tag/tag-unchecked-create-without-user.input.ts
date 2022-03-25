import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CardsInCollectionUncheckedCreateNestedManyWithoutTagsInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => CardsInCollectionUncheckedCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardsInCollectionUncheckedCreateNestedManyWithoutTagsInput;
}
