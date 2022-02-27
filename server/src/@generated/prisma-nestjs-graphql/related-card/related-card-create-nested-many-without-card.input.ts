import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateWithoutCardInput } from './related-card-create-without-card.input';
import { RelatedCardCreateOrConnectWithoutCardInput } from './related-card-create-or-connect-without-card.input';
import { RelatedCardCreateManyCardInputEnvelope } from './related-card-create-many-card-input-envelope.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';

@InputType()
export class RelatedCardCreateNestedManyWithoutCardInput {
  @Field(() => [RelatedCardCreateWithoutCardInput], { nullable: true })
  create?: Array<RelatedCardCreateWithoutCardInput>;

  @Field(() => [RelatedCardCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<RelatedCardCreateOrConnectWithoutCardInput>;

  @Field(() => RelatedCardCreateManyCardInputEnvelope, { nullable: true })
  createMany?: RelatedCardCreateManyCardInputEnvelope;

  @Field(() => [RelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<RelatedCardWhereUniqueInput>;
}
