import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutUserInput } from './tag-create-without-user.input';

@InputType()
export class TagCreateOrConnectWithoutUserInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagCreateWithoutUserInput, { nullable: false })
  create!: TagCreateWithoutUserInput;
}
