import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutTagsInput } from './cards-in-collection-create-without-tags.input';
import { CardsInCollectionCreateOrConnectWithoutTagsInput } from './cards-in-collection-create-or-connect-without-tags.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';

@InputType()
export class CardsInCollectionCreateNestedManyWithoutTagsInput {
  @Field(() => [CardsInCollectionCreateWithoutTagsInput], { nullable: true })
  create?: Array<CardsInCollectionCreateWithoutTagsInput>;

  @Field(() => [CardsInCollectionCreateOrConnectWithoutTagsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutTagsInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<CardsInCollectionWhereUniqueInput>;
}
