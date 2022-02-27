import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';
import { CardCreateOrConnectWithoutRelatedToInput } from './card-create-or-connect-without-related-to.input';
import { CardUpsertWithWhereUniqueWithoutRelatedToInput } from './card-upsert-with-where-unique-without-related-to.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithWhereUniqueWithoutRelatedToInput } from './card-update-with-where-unique-without-related-to.input';
import { CardUpdateManyWithWhereWithoutRelatedToInput } from './card-update-many-with-where-without-related-to.input';
import { CardScalarWhereInput } from './card-scalar-where.input';

@InputType()
export class CardUncheckedUpdateManyWithoutRelatedToInput {
  @Field(() => [CardCreateWithoutRelatedToInput], { nullable: true })
  create?: Array<CardCreateWithoutRelatedToInput>;

  @Field(() => [CardCreateOrConnectWithoutRelatedToInput], { nullable: true })
  connectOrCreate?: Array<CardCreateOrConnectWithoutRelatedToInput>;

  @Field(() => [CardUpsertWithWhereUniqueWithoutRelatedToInput], {
    nullable: true,
  })
  upsert?: Array<CardUpsertWithWhereUniqueWithoutRelatedToInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  set?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  delete?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardUpdateWithWhereUniqueWithoutRelatedToInput], {
    nullable: true,
  })
  update?: Array<CardUpdateWithWhereUniqueWithoutRelatedToInput>;

  @Field(() => [CardUpdateManyWithWhereWithoutRelatedToInput], {
    nullable: true,
  })
  updateMany?: Array<CardUpdateManyWithWhereWithoutRelatedToInput>;

  @Field(() => [CardScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardScalarWhereInput>;
}
