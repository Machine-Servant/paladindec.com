import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutCardsInput } from './tag-create-without-cards.input';
import { TagCreateOrConnectWithoutCardsInput } from './tag-create-or-connect-without-cards.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutCardsInput {
  @Field(() => [TagCreateWithoutCardsInput], { nullable: true })
  create?: Array<TagCreateWithoutCardsInput>;

  @Field(() => [TagCreateOrConnectWithoutCardsInput], { nullable: true })
  connectOrCreate?: Array<TagCreateOrConnectWithoutCardsInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  connect?: Array<TagWhereUniqueInput>;
}
