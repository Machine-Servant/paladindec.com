import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateWithoutReferenceInput } from './scryfall-related-card-create-without-reference.input';
import { ScryfallRelatedCardCreateOrConnectWithoutReferenceInput } from './scryfall-related-card-create-or-connect-without-reference.input';
import { ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput } from './scryfall-related-card-upsert-with-where-unique-without-reference.input';
import { ScryfallRelatedCardCreateManyReferenceInputEnvelope } from './scryfall-related-card-create-many-reference-input-envelope.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput } from './scryfall-related-card-update-with-where-unique-without-reference.input';
import { ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput } from './scryfall-related-card-update-many-with-where-without-reference.input';
import { ScryfallRelatedCardScalarWhereInput } from './scryfall-related-card-scalar-where.input';

@InputType()
export class ScryfallRelatedCardUpdateManyWithoutReferenceInput {
  @Field(() => [ScryfallRelatedCardCreateWithoutReferenceInput], {
    nullable: true,
  })
  create?: Array<ScryfallRelatedCardCreateWithoutReferenceInput>;

  @Field(() => [ScryfallRelatedCardCreateOrConnectWithoutReferenceInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallRelatedCardCreateOrConnectWithoutReferenceInput>;

  @Field(
    () => [ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput],
    { nullable: true },
  )
  upsert?: Array<ScryfallRelatedCardUpsertWithWhereUniqueWithoutReferenceInput>;

  @Field(() => ScryfallRelatedCardCreateManyReferenceInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallRelatedCardCreateManyReferenceInputEnvelope;

  @Field(() => [ScryfallRelatedCardWhereUniqueInput], { nullable: true })
  set?: Array<ScryfallRelatedCardWhereUniqueInput>;

  @Field(() => [ScryfallRelatedCardWhereUniqueInput], { nullable: true })
  disconnect?: Array<ScryfallRelatedCardWhereUniqueInput>;

  @Field(() => [ScryfallRelatedCardWhereUniqueInput], { nullable: true })
  delete?: Array<ScryfallRelatedCardWhereUniqueInput>;

  @Field(() => [ScryfallRelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallRelatedCardWhereUniqueInput>;

  @Field(
    () => [ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput],
    { nullable: true },
  )
  update?: Array<ScryfallRelatedCardUpdateWithWhereUniqueWithoutReferenceInput>;

  @Field(() => [ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput], {
    nullable: true,
  })
  updateMany?: Array<ScryfallRelatedCardUpdateManyWithWhereWithoutReferenceInput>;

  @Field(() => [ScryfallRelatedCardScalarWhereInput], { nullable: true })
  deleteMany?: Array<ScryfallRelatedCardScalarWhereInput>;
}
