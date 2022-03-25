import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithoutTagsInput } from './cards-in-collection-update-without-tags.input';
import { CardsInCollectionCreateWithoutTagsInput } from './cards-in-collection-create-without-tags.input';

@InputType()
export class CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput {
  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: false })
  where!: CardsInCollectionWhereUniqueInput;

  @Field(() => CardsInCollectionUpdateWithoutTagsInput, { nullable: false })
  update!: CardsInCollectionUpdateWithoutTagsInput;

  @Field(() => CardsInCollectionCreateWithoutTagsInput, { nullable: false })
  create!: CardsInCollectionCreateWithoutTagsInput;
}
