import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateManyUserInput } from './tag-create-many-user.input';

@InputType()
export class TagCreateManyUserInputEnvelope {
  @Field(() => [TagCreateManyUserInput], { nullable: false })
  data!: Array<TagCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
