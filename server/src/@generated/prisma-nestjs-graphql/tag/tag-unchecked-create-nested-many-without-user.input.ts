import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutUserInput } from './tag-create-without-user.input';
import { TagCreateOrConnectWithoutUserInput } from './tag-create-or-connect-without-user.input';
import { TagCreateManyUserInputEnvelope } from './tag-create-many-user-input-envelope.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [TagCreateWithoutUserInput], { nullable: true })
  create?: Array<TagCreateWithoutUserInput>;

  @Field(() => [TagCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<TagCreateOrConnectWithoutUserInput>;

  @Field(() => TagCreateManyUserInputEnvelope, { nullable: true })
  createMany?: TagCreateManyUserInputEnvelope;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  connect?: Array<TagWhereUniqueInput>;
}
