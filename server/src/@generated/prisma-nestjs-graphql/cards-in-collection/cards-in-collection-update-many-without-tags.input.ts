import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutTagsInput } from './cards-in-collection-create-without-tags.input';
import { CardsInCollectionCreateOrConnectWithoutTagsInput } from './cards-in-collection-create-or-connect-without-tags.input';
import { CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput } from './cards-in-collection-upsert-with-where-unique-without-tags.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput } from './cards-in-collection-update-with-where-unique-without-tags.input';
import { CardsInCollectionUpdateManyWithWhereWithoutTagsInput } from './cards-in-collection-update-many-with-where-without-tags.input';
import { CardsInCollectionScalarWhereInput } from './cards-in-collection-scalar-where.input';

@InputType()
export class CardsInCollectionUpdateManyWithoutTagsInput {
  @Field(() => [CardsInCollectionCreateWithoutTagsInput], { nullable: true })
  create?: Array<CardsInCollectionCreateWithoutTagsInput>;

  @Field(() => [CardsInCollectionCreateOrConnectWithoutTagsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutTagsInput>;

  @Field(() => [CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput], {
    nullable: true,
  })
  upsert?: Array<CardsInCollectionUpsertWithWhereUniqueWithoutTagsInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  set?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  delete?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput], {
    nullable: true,
  })
  update?: Array<CardsInCollectionUpdateWithWhereUniqueWithoutTagsInput>;

  @Field(() => [CardsInCollectionUpdateManyWithWhereWithoutTagsInput], {
    nullable: true,
  })
  updateMany?: Array<CardsInCollectionUpdateManyWithWhereWithoutTagsInput>;

  @Field(() => [CardsInCollectionScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardsInCollectionScalarWhereInput>;
}
