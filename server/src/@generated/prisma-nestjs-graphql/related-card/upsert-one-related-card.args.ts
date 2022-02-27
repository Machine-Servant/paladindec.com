import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardCreateInput } from './related-card-create.input';
import { RelatedCardUpdateInput } from './related-card-update.input';

@ArgsType()
export class UpsertOneRelatedCardArgs {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardCreateInput, { nullable: false })
  create!: RelatedCardCreateInput;

  @Field(() => RelatedCardUpdateInput, { nullable: false })
  update!: RelatedCardUpdateInput;
}
