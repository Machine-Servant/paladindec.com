import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-collection.input';

@InputType()
export class CollectionUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(
    () => CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput,
    { nullable: true },
  )
  cards?: CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput;
}
