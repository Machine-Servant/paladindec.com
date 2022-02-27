import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardUpdateWithoutCardInput } from './related-card-update-without-card.input';
import { RelatedCardCreateWithoutCardInput } from './related-card-create-without-card.input';

@InputType()
export class RelatedCardUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardUpdateWithoutCardInput, { nullable: false })
  update!: RelatedCardUpdateWithoutCardInput;

  @Field(() => RelatedCardCreateWithoutCardInput, { nullable: false })
  create!: RelatedCardCreateWithoutCardInput;
}
