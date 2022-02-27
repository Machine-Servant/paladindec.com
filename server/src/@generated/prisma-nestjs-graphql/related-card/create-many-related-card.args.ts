import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardCreateManyInput } from './related-card-create-many.input';

@ArgsType()
export class CreateManyRelatedCardArgs {
  @Field(() => [RelatedCardCreateManyInput], { nullable: false })
  data!: Array<RelatedCardCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
