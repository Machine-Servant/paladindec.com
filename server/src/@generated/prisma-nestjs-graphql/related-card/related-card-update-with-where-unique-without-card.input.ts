import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithoutCardInput } from './related-card-update-without-card.input';

@InputType()
export class RelatedCardUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardUpdateWithoutCardInput, { nullable: false })
  data!: RelatedCardUpdateWithoutCardInput;
}
