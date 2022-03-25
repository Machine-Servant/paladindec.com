import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutUserInput } from './tag-update-without-user.input';
import { TagCreateWithoutUserInput } from './tag-create-without-user.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutUserInput, { nullable: false })
  update!: TagUpdateWithoutUserInput;

  @Field(() => TagCreateWithoutUserInput, { nullable: false })
  create!: TagCreateWithoutUserInput;
}
