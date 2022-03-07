import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateWithoutReferenceInput } from './scryfall-related-card-create-without-reference.input';
import { ScryfallRelatedCardCreateOrConnectWithoutReferenceInput } from './scryfall-related-card-create-or-connect-without-reference.input';
import { ScryfallRelatedCardCreateManyReferenceInputEnvelope } from './scryfall-related-card-create-many-reference-input-envelope.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';

@InputType()
export class ScryfallRelatedCardUncheckedCreateNestedManyWithoutReferenceInput {
  @Field(() => [ScryfallRelatedCardCreateWithoutReferenceInput], {
    nullable: true,
  })
  create?: Array<ScryfallRelatedCardCreateWithoutReferenceInput>;

  @Field(() => [ScryfallRelatedCardCreateOrConnectWithoutReferenceInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallRelatedCardCreateOrConnectWithoutReferenceInput>;

  @Field(() => ScryfallRelatedCardCreateManyReferenceInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallRelatedCardCreateManyReferenceInputEnvelope;

  @Field(() => [ScryfallRelatedCardWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallRelatedCardWhereUniqueInput>;
}
