import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTagInput } from '../user/user-create-nested-one-without-tag.input';
import { CardsInCollectionCreateNestedManyWithoutTagsInput } from '../cards-in-collection/cards-in-collection-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => UserCreateNestedOneWithoutTagInput, { nullable: false })
  user!: UserCreateNestedOneWithoutTagInput;

  @Field(() => CardsInCollectionCreateNestedManyWithoutTagsInput, {
    nullable: true,
  })
  cards?: CardsInCollectionCreateNestedManyWithoutTagsInput;
}
