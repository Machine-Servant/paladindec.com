import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceCreateWithoutCardInput } from './scryfall-card-face-create-without-card.input';
import { ScryfallCardFaceCreateOrConnectWithoutCardInput } from './scryfall-card-face-create-or-connect-without-card.input';
import { ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput } from './scryfall-card-face-upsert-with-where-unique-without-card.input';
import { ScryfallCardFaceCreateManyCardInputEnvelope } from './scryfall-card-face-create-many-card-input-envelope.input';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput } from './scryfall-card-face-update-with-where-unique-without-card.input';
import { ScryfallCardFaceUpdateManyWithWhereWithoutCardInput } from './scryfall-card-face-update-many-with-where-without-card.input';
import { ScryfallCardFaceScalarWhereInput } from './scryfall-card-face-scalar-where.input';

@InputType()
export class ScryfallCardFaceUpdateManyWithoutCardInput {
  @Field(() => [ScryfallCardFaceCreateWithoutCardInput], { nullable: true })
  create?: Array<ScryfallCardFaceCreateWithoutCardInput>;

  @Field(() => [ScryfallCardFaceCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallCardFaceCreateOrConnectWithoutCardInput>;

  @Field(() => [ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  upsert?: Array<ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => ScryfallCardFaceCreateManyCardInputEnvelope, { nullable: true })
  createMany?: ScryfallCardFaceCreateManyCardInputEnvelope;

  @Field(() => [ScryfallCardFaceWhereUniqueInput], { nullable: true })
  set?: Array<ScryfallCardFaceWhereUniqueInput>;

  @Field(() => [ScryfallCardFaceWhereUniqueInput], { nullable: true })
  disconnect?: Array<ScryfallCardFaceWhereUniqueInput>;

  @Field(() => [ScryfallCardFaceWhereUniqueInput], { nullable: true })
  delete?: Array<ScryfallCardFaceWhereUniqueInput>;

  @Field(() => [ScryfallCardFaceWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardFaceWhereUniqueInput>;

  @Field(() => [ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  update?: Array<ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [ScryfallCardFaceUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<ScryfallCardFaceUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [ScryfallCardFaceScalarWhereInput], { nullable: true })
  deleteMany?: Array<ScryfallCardFaceScalarWhereInput>;
}
