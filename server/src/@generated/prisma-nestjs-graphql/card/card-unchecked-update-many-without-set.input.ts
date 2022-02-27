import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutSetInput } from './card-create-without-set.input';
import { CardCreateOrConnectWithoutSetInput } from './card-create-or-connect-without-set.input';
import { CardUpsertWithWhereUniqueWithoutSetInput } from './card-upsert-with-where-unique-without-set.input';
import { CardCreateManySetInputEnvelope } from './card-create-many-set-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithWhereUniqueWithoutSetInput } from './card-update-with-where-unique-without-set.input';
import { CardUpdateManyWithWhereWithoutSetInput } from './card-update-many-with-where-without-set.input';
import { CardScalarWhereInput } from './card-scalar-where.input';

@InputType()
export class CardUncheckedUpdateManyWithoutSetInput {
  @Field(() => [CardCreateWithoutSetInput], { nullable: true })
  create?: Array<CardCreateWithoutSetInput>;

  @Field(() => [CardCreateOrConnectWithoutSetInput], { nullable: true })
  connectOrCreate?: Array<CardCreateOrConnectWithoutSetInput>;

  @Field(() => [CardUpsertWithWhereUniqueWithoutSetInput], { nullable: true })
  upsert?: Array<CardUpsertWithWhereUniqueWithoutSetInput>;

  @Field(() => CardCreateManySetInputEnvelope, { nullable: true })
  createMany?: CardCreateManySetInputEnvelope;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  set?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  delete?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardUpdateWithWhereUniqueWithoutSetInput], { nullable: true })
  update?: Array<CardUpdateWithWhereUniqueWithoutSetInput>;

  @Field(() => [CardUpdateManyWithWhereWithoutSetInput], { nullable: true })
  updateMany?: Array<CardUpdateManyWithWhereWithoutSetInput>;

  @Field(() => [CardScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardScalarWhereInput>;
}
