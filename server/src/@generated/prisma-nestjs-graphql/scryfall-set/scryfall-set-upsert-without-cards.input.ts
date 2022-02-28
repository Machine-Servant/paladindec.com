import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallSetUpdateWithoutCardsInput } from './scryfall-set-update-without-cards.input';
import { ScryfallSetCreateWithoutCardsInput } from './scryfall-set-create-without-cards.input';

@InputType()
export class ScryfallSetUpsertWithoutCardsInput {
  @Field(() => ScryfallSetUpdateWithoutCardsInput, { nullable: false })
  update!: ScryfallSetUpdateWithoutCardsInput;

  @Field(() => ScryfallSetCreateWithoutCardsInput, { nullable: false })
  create!: ScryfallSetCreateWithoutCardsInput;
}
