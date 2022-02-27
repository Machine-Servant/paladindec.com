import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardCreateInput } from './related-card-create.input';

@ArgsType()
export class CreateOneRelatedCardArgs {
  @Field(() => RelatedCardCreateInput, { nullable: false })
  data!: RelatedCardCreateInput;
}
