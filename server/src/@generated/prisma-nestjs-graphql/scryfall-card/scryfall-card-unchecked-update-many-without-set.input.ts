import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutSetInput } from './scryfall-card-create-without-set.input';
import { ScryfallCardCreateOrConnectWithoutSetInput } from './scryfall-card-create-or-connect-without-set.input';
import { ScryfallCardUpsertWithWhereUniqueWithoutSetInput } from './scryfall-card-upsert-with-where-unique-without-set.input';
import { ScryfallCardCreateManySetInputEnvelope } from './scryfall-card-create-many-set-input-envelope.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithWhereUniqueWithoutSetInput } from './scryfall-card-update-with-where-unique-without-set.input';
import { ScryfallCardUpdateManyWithWhereWithoutSetInput } from './scryfall-card-update-many-with-where-without-set.input';
import { ScryfallCardScalarWhereInput } from './scryfall-card-scalar-where.input';

@InputType()
export class ScryfallCardUncheckedUpdateManyWithoutSetInput {
  @Field(() => [ScryfallCardCreateWithoutSetInput], { nullable: true })
  create?: Array<ScryfallCardCreateWithoutSetInput>;

  @Field(() => [ScryfallCardCreateOrConnectWithoutSetInput], { nullable: true })
  connectOrCreate?: Array<ScryfallCardCreateOrConnectWithoutSetInput>;

  @Field(() => [ScryfallCardUpsertWithWhereUniqueWithoutSetInput], {
    nullable: true,
  })
  upsert?: Array<ScryfallCardUpsertWithWhereUniqueWithoutSetInput>;

  @Field(() => ScryfallCardCreateManySetInputEnvelope, { nullable: true })
  createMany?: ScryfallCardCreateManySetInputEnvelope;

  @Field(() => [ScryfallCardWhereUniqueInput], { nullable: true })
  set?: Array<ScryfallCardWhereUniqueInput>;

  @Field(() => [ScryfallCardWhereUniqueInput], { nullable: true })
  disconnect?: Array<ScryfallCardWhereUniqueInput>;

  @Field(() => [ScryfallCardWhereUniqueInput], { nullable: true })
  delete?: Array<ScryfallCardWhereUniqueInput>;

  @Field(() => [ScryfallCardWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardWhereUniqueInput>;

  @Field(() => [ScryfallCardUpdateWithWhereUniqueWithoutSetInput], {
    nullable: true,
  })
  update?: Array<ScryfallCardUpdateWithWhereUniqueWithoutSetInput>;

  @Field(() => [ScryfallCardUpdateManyWithWhereWithoutSetInput], {
    nullable: true,
  })
  updateMany?: Array<ScryfallCardUpdateManyWithWhereWithoutSetInput>;

  @Field(() => [ScryfallCardScalarWhereInput], { nullable: true })
  deleteMany?: Array<ScryfallCardScalarWhereInput>;
}
