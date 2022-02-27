import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateWithoutCardInput } from './related-card-create-without-card.input';
import { RelatedCardCreateOrConnectWithoutCardInput } from './related-card-create-or-connect-without-card.input';
import { RelatedCardUpsertWithWhereUniqueWithoutCardInput } from './related-card-upsert-with-where-unique-without-card.input';
import { RelatedCardCreateManyCardInputEnvelope } from './related-card-create-many-card-input-envelope.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithWhereUniqueWithoutCardInput } from './related-card-update-with-where-unique-without-card.input';
import { RelatedCardUpdateManyWithWhereWithoutCardInput } from './related-card-update-many-with-where-without-card.input';
import { RelatedCardScalarWhereInput } from './related-card-scalar-where.input';

@InputType()
export class RelatedCardUncheckedUpdateManyWithoutCardInput {
  @Field(() => [RelatedCardCreateWithoutCardInput], { nullable: true })
  create?: Array<RelatedCardCreateWithoutCardInput>;

  @Field(() => [RelatedCardCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<RelatedCardCreateOrConnectWithoutCardInput>;

  @Field(() => [RelatedCardUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  upsert?: Array<RelatedCardUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => RelatedCardCreateManyCardInputEnvelope, { nullable: true })
  createMany?: RelatedCardCreateManyCardInputEnvelope;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  set?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  disconnect?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  delete?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<RelatedCardWhereUniqueInput>;

  @Field(() => [RelatedCardUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  update?: Array<RelatedCardUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [RelatedCardUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<RelatedCardUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [RelatedCardScalarWhereInput], { nullable: true })
  deleteMany?: Array<RelatedCardScalarWhereInput>;
}
