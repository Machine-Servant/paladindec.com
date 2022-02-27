import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithoutReferenceInput } from './related-card-update-without-reference.input';

@InputType()
export class RelatedCardUpdateWithWhereUniqueWithoutReferenceInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardUpdateWithoutReferenceInput, { nullable: false })
  data!: RelatedCardUpdateWithoutReferenceInput;
}
