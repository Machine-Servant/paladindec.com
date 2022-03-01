import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutUserInput } from './collection-create-without-user.input';
import { CollectionCreateOrConnectWithoutUserInput } from './collection-create-or-connect-without-user.input';
import { CollectionUpsertWithWhereUniqueWithoutUserInput } from './collection-upsert-with-where-unique-without-user.input';
import { CollectionCreateManyUserInputEnvelope } from './collection-create-many-user-input-envelope.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateWithWhereUniqueWithoutUserInput } from './collection-update-with-where-unique-without-user.input';
import { CollectionUpdateManyWithWhereWithoutUserInput } from './collection-update-many-with-where-without-user.input';
import { CollectionScalarWhereInput } from './collection-scalar-where.input';

@InputType()
export class CollectionUpdateManyWithoutUserInput {
  @Field(() => [CollectionCreateWithoutUserInput], { nullable: true })
  create?: Array<CollectionCreateWithoutUserInput>;

  @Field(() => [CollectionCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: Array<CollectionCreateOrConnectWithoutUserInput>;

  @Field(() => [CollectionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: Array<CollectionUpsertWithWhereUniqueWithoutUserInput>;

  @Field(() => CollectionCreateManyUserInputEnvelope, { nullable: true })
  createMany?: CollectionCreateManyUserInputEnvelope;

  @Field(() => [CollectionWhereUniqueInput], { nullable: true })
  set?: Array<CollectionWhereUniqueInput>;

  @Field(() => [CollectionWhereUniqueInput], { nullable: true })
  disconnect?: Array<CollectionWhereUniqueInput>;

  @Field(() => [CollectionWhereUniqueInput], { nullable: true })
  delete?: Array<CollectionWhereUniqueInput>;

  @Field(() => [CollectionWhereUniqueInput], { nullable: true })
  connect?: Array<CollectionWhereUniqueInput>;

  @Field(() => [CollectionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: Array<CollectionUpdateWithWhereUniqueWithoutUserInput>;

  @Field(() => [CollectionUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: Array<CollectionUpdateManyWithWhereWithoutUserInput>;

  @Field(() => [CollectionScalarWhereInput], { nullable: true })
  deleteMany?: Array<CollectionScalarWhereInput>;
}
