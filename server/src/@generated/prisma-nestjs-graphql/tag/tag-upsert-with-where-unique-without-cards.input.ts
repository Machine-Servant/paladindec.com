import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutCardsInput } from './tag-update-without-cards.input';
import { TagCreateWithoutCardsInput } from './tag-create-without-cards.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutCardsInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutCardsInput, { nullable: false })
  update!: TagUpdateWithoutCardsInput;

  @Field(() => TagCreateWithoutCardsInput, { nullable: false })
  create!: TagCreateWithoutCardsInput;
}
