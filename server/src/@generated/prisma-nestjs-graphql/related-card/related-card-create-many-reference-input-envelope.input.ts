import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateManyReferenceInput } from './related-card-create-many-reference.input';

@InputType()
export class RelatedCardCreateManyReferenceInputEnvelope {
  @Field(() => [RelatedCardCreateManyReferenceInput], { nullable: false })
  data!: Array<RelatedCardCreateManyReferenceInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
