import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SetWhereUniqueInput } from './set-where-unique.input';
import { SetCreateWithoutCardsInput } from './set-create-without-cards.input';

@InputType()
export class SetCreateOrConnectWithoutCardsInput {
  @Field(() => SetWhereUniqueInput, { nullable: false })
  where!: SetWhereUniqueInput;

  @Field(() => SetCreateWithoutCardsInput, { nullable: false })
  create!: SetCreateWithoutCardsInput;
}
