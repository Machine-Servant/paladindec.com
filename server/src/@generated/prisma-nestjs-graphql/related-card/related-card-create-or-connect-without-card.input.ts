import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { RelatedCardCreateWithoutCardInput } from './related-card-create-without-card.input';

@InputType()
export class RelatedCardCreateOrConnectWithoutCardInput {
  @Field(() => RelatedCardWhereUniqueInput, { nullable: false })
  where!: RelatedCardWhereUniqueInput;

  @Field(() => RelatedCardCreateWithoutCardInput, { nullable: false })
  create!: RelatedCardCreateWithoutCardInput;
}
