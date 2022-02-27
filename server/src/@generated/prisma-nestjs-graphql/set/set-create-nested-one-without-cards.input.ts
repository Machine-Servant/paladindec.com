import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SetCreateWithoutCardsInput } from './set-create-without-cards.input';
import { SetCreateOrConnectWithoutCardsInput } from './set-create-or-connect-without-cards.input';
import { SetWhereUniqueInput } from './set-where-unique.input';

@InputType()
export class SetCreateNestedOneWithoutCardsInput {
  @Field(() => SetCreateWithoutCardsInput, { nullable: true })
  create?: SetCreateWithoutCardsInput;

  @Field(() => SetCreateOrConnectWithoutCardsInput, { nullable: true })
  connectOrCreate?: SetCreateOrConnectWithoutCardsInput;

  @Field(() => SetWhereUniqueInput, { nullable: true })
  connect?: SetWhereUniqueInput;
}
