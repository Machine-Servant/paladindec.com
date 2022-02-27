import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardUpdateManyMutationInput } from './related-card-update-many-mutation.input';
import { RelatedCardWhereInput } from './related-card-where.input';

@ArgsType()
export class UpdateManyRelatedCardArgs {
  @Field(() => RelatedCardUpdateManyMutationInput, { nullable: false })
  data!: RelatedCardUpdateManyMutationInput;

  @Field(() => RelatedCardWhereInput, { nullable: true })
  where?: RelatedCardWhereInput;
}
