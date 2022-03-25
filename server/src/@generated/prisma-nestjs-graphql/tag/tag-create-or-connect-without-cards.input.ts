import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagCreateWithoutCardsInput } from './tag-create-without-cards.input';

@InputType()
export class TagCreateOrConnectWithoutCardsInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;

  @Field(() => TagCreateWithoutCardsInput, { nullable: false })
  create!: TagCreateWithoutCardsInput;
}
