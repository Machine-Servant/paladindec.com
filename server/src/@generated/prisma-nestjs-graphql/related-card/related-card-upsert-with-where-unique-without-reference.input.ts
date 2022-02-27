import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithoutReferenceInput } from './related-card-update-without-reference.input';
import { RelatedCardCreateWithoutReferenceInput } from './related-card-create-without-reference.input';

@InputType()
export class RelatedCardUpsertWithWhereUniqueWithoutReferenceInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardUpdateWithoutReferenceInput, { nullable: false })
  update!: RelatedCardUpdateWithoutReferenceInput;

  @Field(() => RelatedCardCreateWithoutReferenceInput, { nullable: false })
  create!: RelatedCardCreateWithoutReferenceInput;
}
