import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutUserInput } from './tag-update-without-user.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagUpdateWithoutUserInput, { nullable: false })
  data!: TagUpdateWithoutUserInput;
}
