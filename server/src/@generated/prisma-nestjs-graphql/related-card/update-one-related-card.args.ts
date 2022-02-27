import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardUpdateInput } from './related-card-update.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';

@ArgsType()
export class UpdateOneRelatedCardArgs {
  @Field(() => RelatedCardUpdateInput, { nullable: false })
  data!: RelatedCardUpdateInput;

  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;
}
