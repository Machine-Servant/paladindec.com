import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';
import { ScryfallSetCreateWithoutCardsInput } from './scryfall-set-create-without-cards.input';

@InputType()
export class ScryfallSetCreateOrConnectWithoutCardsInput {
  @Field(() => ScryfallSetWhereUniqueInput, { nullable: false })
  where!: ScryfallSetWhereUniqueInput;

  @Field(() => ScryfallSetCreateWithoutCardsInput, { nullable: false })
  create!: ScryfallSetCreateWithoutCardsInput;
}
