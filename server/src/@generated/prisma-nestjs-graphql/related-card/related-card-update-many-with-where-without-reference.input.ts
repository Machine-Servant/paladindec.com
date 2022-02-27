import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardScalarWhereInput } from './related-card-scalar-where.input';
import { RelatedCardUpdateManyMutationInput } from './related-card-update-many-mutation.input';

@InputType()
export class RelatedCardUpdateManyWithWhereWithoutReferenceInput {
  @Field(() => RelatedCardScalarWhereInput, { nullable: false })
  where!: RelatedCardScalarWhereInput;

  @Field(() => RelatedCardUpdateManyMutationInput, { nullable: false })
  data!: RelatedCardUpdateManyMutationInput;
}
