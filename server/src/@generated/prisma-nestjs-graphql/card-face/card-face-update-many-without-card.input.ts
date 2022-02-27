import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceCreateWithoutCardInput } from './card-face-create-without-card.input';
import { CardFaceCreateOrConnectWithoutCardInput } from './card-face-create-or-connect-without-card.input';
import { CardFaceUpsertWithWhereUniqueWithoutCardInput } from './card-face-upsert-with-where-unique-without-card.input';
import { CardFaceCreateManyCardInputEnvelope } from './card-face-create-many-card-input-envelope.input';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { CardFaceUpdateWithWhereUniqueWithoutCardInput } from './card-face-update-with-where-unique-without-card.input';
import { CardFaceUpdateManyWithWhereWithoutCardInput } from './card-face-update-many-with-where-without-card.input';
import { CardFaceScalarWhereInput } from './card-face-scalar-where.input';

@InputType()
export class CardFaceUpdateManyWithoutCardInput {
  @Field(() => [CardFaceCreateWithoutCardInput], { nullable: true })
  create?: Array<CardFaceCreateWithoutCardInput>;

  @Field(() => [CardFaceCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<CardFaceCreateOrConnectWithoutCardInput>;

  @Field(() => [CardFaceUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  upsert?: Array<CardFaceUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => CardFaceCreateManyCardInputEnvelope, { nullable: true })
  createMany?: CardFaceCreateManyCardInputEnvelope;

  @Field(() => [CardFaceWhereUniqueInput], { nullable: true })
  set?: Array<CardFaceWhereUniqueInput>;

  @Field(() => [CardFaceWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardFaceWhereUniqueInput>;

  @Field(() => [CardFaceWhereUniqueInput], { nullable: true })
  delete?: Array<CardFaceWhereUniqueInput>;

  @Field(() => [CardFaceWhereUniqueInput], { nullable: true })
  connect?: Array<CardFaceWhereUniqueInput>;

  @Field(() => [CardFaceUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  update?: Array<CardFaceUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [CardFaceUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<CardFaceUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [CardFaceScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardFaceScalarWhereInput>;
}
