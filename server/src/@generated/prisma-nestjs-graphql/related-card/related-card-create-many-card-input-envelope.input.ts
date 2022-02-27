import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardCreateManyCardInput } from './related-card-create-many-card.input';

@InputType()
export class RelatedCardCreateManyCardInputEnvelope {
  @Field(() => [RelatedCardCreateManyCardInput], { nullable: false })
  data!: Array<RelatedCardCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
