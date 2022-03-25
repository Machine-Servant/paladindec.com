import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CardsInCollectionCreateNestedManyWithoutTagsInput } from '../cards-in-collection/cards-in-collection-create-nested-many-without-tags.input';

@InputType()
export class TagCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => CardsInCollectionCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardsInCollectionCreateNestedManyWithoutTagsInput;
}
