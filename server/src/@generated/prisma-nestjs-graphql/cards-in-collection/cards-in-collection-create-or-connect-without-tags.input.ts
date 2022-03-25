import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionCreateWithoutTagsInput } from './cards-in-collection-create-without-tags.input';

@InputType()
export class CardsInCollectionCreateOrConnectWithoutTagsInput {
  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: false })
  where!: CardsInCollectionWhereUniqueInput;

  @Field(() => CardsInCollectionCreateWithoutTagsInput, { nullable: false })
  create!: CardsInCollectionCreateWithoutTagsInput;
}
