import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateWithoutReferenceInput } from './related-card-create-without-reference.input';
import { RelatedCardCreateOrConnectWithoutReferenceInput } from './related-card-create-or-connect-without-reference.input';
import { RelatedCardCreateManyReferenceInputEnvelope } from './related-card-create-many-reference-input-envelope.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';

@InputType()
export class RelatedCardCreateNestedManyWithoutReferenceInput {
  @Field(() => [RelatedCardCreateWithoutReferenceInput], { nullable: true })
  create?: Array<RelatedCardCreateWithoutReferenceInput>;

  @Field(() => [RelatedCardCreateOrConnectWithoutReferenceInput], {
    nullable: true,
  })
  connectOrCreate?: Array<RelatedCardCreateOrConnectWithoutReferenceInput>;

  @Field(() => RelatedCardCreateManyReferenceInputEnvelope, { nullable: true })
  createMany?: RelatedCardCreateManyReferenceInputEnvelope;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<RelatedCardWhereUniqueInput>;
}
