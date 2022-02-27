import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardCreateWithoutReferenceInput } from './related-card-create-without-reference.input';

@InputType()
export class RelatedCardCreateOrConnectWithoutReferenceInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardCreateWithoutReferenceInput, { nullable: false })
  create!: RelatedCardCreateWithoutReferenceInput;
}
