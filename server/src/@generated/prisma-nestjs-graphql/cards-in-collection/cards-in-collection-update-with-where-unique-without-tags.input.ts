import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithoutTagsInput } from './cards-in-collection-update-without-tags.input';

@InputType()
export class CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput {
  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: false })
  where!: CardsInCollectionWhereUniqueInput;

  @Field(() => CardsInCollectionUpdateWithoutTagsInput, { nullable: false })
  data!: CardsInCollectionUpdateWithoutTagsInput;
}
