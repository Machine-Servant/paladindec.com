import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutCardsInput } from './tag-create-without-cards.input';
import { TagCreateOrConnectWithoutCardsInput } from './tag-create-or-connect-without-cards.input';
import { TagUpsertWithWhereUniqueWithoutCardsInput } from './tag-upsert-with-where-unique-without-cards.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutCardsInput } from './tag-update-with-where-unique-without-cards.input';
import { TagUpdateManyWithWhereWithoutCardsInput } from './tag-update-many-with-where-without-cards.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutCardsInput {
  @Field(() => [TagCreateWithoutCardsInput], { nullable: true })
  create?: Array<TagCreateWithoutCardsInput>;

  @Field(() => [TagCreateOrConnectWithoutCardsInput], { nullable: true })
  connectOrCreate?: Array<TagCreateOrConnectWithoutCardsInput>;

  @Field(() => [TagUpsertWithWhereUniqueWithoutCardsInput], { nullable: true })
  upsert?: Array<TagUpsertWithWhereUniqueWithoutCardsInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  set?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  disconnect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  delete?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  connect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagUpdateWithWhereUniqueWithoutCardsInput], { nullable: true })
  update?: Array<TagUpdateWithWhereUniqueWithoutCardsInput>;

  @Field(() => [TagUpdateManyWithWhereWithoutCardsInput], { nullable: true })
  updateMany?: Array<TagUpdateManyWithWhereWithoutCardsInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  deleteMany?: Array<TagScalarWhereInput>;
}
