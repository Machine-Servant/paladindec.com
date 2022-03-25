import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutUserInput } from './tag-create-without-user.input';
import { TagCreateOrConnectWithoutUserInput } from './tag-create-or-connect-without-user.input';
import { TagUpsertWithWhereUniqueWithoutUserInput } from './tag-upsert-with-where-unique-without-user.input';
import { TagCreateManyUserInputEnvelope } from './tag-create-many-user-input-envelope.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutUserInput } from './tag-update-with-where-unique-without-user.input';
import { TagUpdateManyWithWhereWithoutUserInput } from './tag-update-many-with-where-without-user.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutUserInput {
  @Field(() => [TagCreateWithoutUserInput], { nullable: true })
  create?: Array<TagCreateWithoutUserInput>;

  @Field(() => [TagCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<TagCreateOrConnectWithoutUserInput>;

  @Field(() => [TagUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: Array<TagUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => TagCreateManyUserInputEnvelope, { nullable: true })
  createMany?: TagCreateManyUserInputEnvelope;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  set?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  disconnect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  delete?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  connect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: Array<TagUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [TagUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: Array<TagUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  deleteMany?: Array<TagScalarWhereInput>;
}
