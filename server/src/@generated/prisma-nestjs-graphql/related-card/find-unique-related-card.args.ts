import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';

@ArgsType()
export class FindUniqueRelatedCardArgs {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;
}
