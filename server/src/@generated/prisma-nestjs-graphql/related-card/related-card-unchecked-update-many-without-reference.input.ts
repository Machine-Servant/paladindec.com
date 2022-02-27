import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateWithoutReferenceInput } from './related-card-create-without-reference.input';
import { RelatedCardCreateOrConnectWithoutReferenceInput } from './related-card-create-or-connect-without-reference.input';
import { RelatedCardUpsertWithWhereUniqueWithoutReferenceInput } from './related-card-upsert-with-where-unique-without-reference.input';
import { RelatedCardCreateManyReferenceInputEnvelope } from './related-card-create-many-reference-input-envelope.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithWhereUniqueWithoutReferenceInput } from './related-card-update-with-where-unique-without-reference.input';
import { RelatedCardUpdateManyWithWhereWithoutReferenceInput } from './related-card-update-many-with-where-without-reference.input';
import { RelatedCardScalarWhereInput } from './related-card-scalar-where.input';

@InputType()
export class RelatedCardUncheckedUpdateManyWithoutReferenceInput {
  @Field(() => [RelatedCardCreateWithoutReferenceInput], { nullable: true })
  create?: Array<RelatedCardCreateWithoutReferenceInput>;

  @Field(() => [RelatedCardCreateOrConnectWithoutReferenceInput], {
    nullable: true,
  })
  connectOrCreate?: Array<RelatedCardCreateOrConnectWithoutReferenceInput>;

  @Field(() => [RelatedCardUpsertWithWhereUniqueWithoutReferenceInput], {
    nullable: true,
  })
  upsert?: Array<RelatedCardUpsertWithWhereUniqueWithoutReferenceInput>;

  @Field(() => RelatedCardCreateManyReferenceInputEnvelope, { nullable: true })
  createMany?: RelatedCardCreateManyReferenceInputEnvelope;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  set?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  disconnect?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  delete?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardUpdateWithWhereUniqueWithoutReferenceInput], {
    nullable: true,
  })
  update?: Array<RelatedCardUpdateWithWhereUniqueWithoutReferenceInput>;

  @Field(() => [RelatedCardUpdateManyWithWhereWithoutReferenceInput], {
    nullable: true,
  })
  updateMany?: Array<RelatedCardUpdateManyWithWhereWithoutReferenceInput>;

  @Field(() => [RelatedCardScalarWhereInput], { nullable: true })
  deleteMany?: Array<RelatedCardScalarWhereInput>;
}
