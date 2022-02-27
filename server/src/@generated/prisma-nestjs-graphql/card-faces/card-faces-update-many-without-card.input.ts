import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesCreateWithoutCardInput } from './card-faces-create-without-card.input';
import { CardFacesCreateOrConnectWithoutCardInput } from './card-faces-create-or-connect-without-card.input';
import { CardFacesUpsertWithWhereUniqueWithoutCardInput } from './card-faces-upsert-with-where-unique-without-card.input';
import { CardFacesCreateManyCardInputEnvelope } from './card-faces-create-many-card-input-envelope.input';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { CardFacesUpdateWithWhereUniqueWithoutCardInput } from './card-faces-update-with-where-unique-without-card.input';
import { CardFacesUpdateManyWithWhereWithoutCardInput } from './card-faces-update-many-with-where-without-card.input';
import { CardFacesScalarWhereInput } from './card-faces-scalar-where.input';

@InputType()
export class CardFacesUpdateManyWithoutCardInput {
  @Field(() => [CardFacesCreateWithoutCardInput], { nullable: true })
  create?: Array<CardFacesCreateWithoutCardInput>;

  @Field(() => [CardFacesCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<CardFacesCreateOrConnectWithoutCardInput>;

  @Field(() => [CardFacesUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  upsert?: Array<CardFacesUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => CardFacesCreateManyCardInputEnvelope, { nullable: true })
  createMany?: CardFacesCreateManyCardInputEnvelope;

  @Field(() => [CardFacesWhereUniqueInput], { nullable: true })
  set?: Array<CardFacesWhereUniqueInput>;

  @Field(() => [CardFacesWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardFacesWhereUniqueInput>;

  @Field(() => [CardFacesWhereUniqueInput], { nullable: true })
  delete?: Array<CardFacesWhereUniqueInput>;

  @Field(() => [CardFacesWhereUniqueInput], { nullable: true })
  connect?: Array<CardFacesWhereUniqueInput>;

  @Field(() => [CardFacesUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  update?: Array<CardFacesUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [CardFacesUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<CardFacesUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [CardFacesScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardFacesScalarWhereInput>;
}
