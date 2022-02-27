import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SetUpdateWithoutCardsInput } from './set-update-without-cards.input';
import { SetCreateWithoutCardsInput } from './set-create-without-cards.input';

@InputType()
export class SetUpsertWithoutCardsInput {
  @Field(() => SetUpdateWithoutCardsInput, { nullable: false })
  update!: SetUpdateWithoutCardsInput;

  @Field(() => SetCreateWithoutCardsInput, { nullable: false })
  create!: SetCreateWithoutCardsInput;
}
