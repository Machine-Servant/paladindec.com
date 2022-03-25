import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutCardsInput } from './tag-update-without-cards.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutCardsInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutCardsInput, { nullable: false })
  data!: TagUpdateWithoutCardsInput;
}
