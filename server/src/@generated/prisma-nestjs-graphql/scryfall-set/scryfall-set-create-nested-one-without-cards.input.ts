import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallSetCreateWithoutCardsInput } from './scryfall-set-create-without-cards.input';
import { ScryfallSetCreateOrConnectWithoutCardsInput } from './scryfall-set-create-or-connect-without-cards.input';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';

@InputType()
export class ScryfallSetCreateNestedOneWithoutCardsInput {
  @Field(() => ScryfallSetCreateWithoutCardsInput, { nullable: true })
  create?: ScryfallSetCreateWithoutCardsInput;

  @Field(() => ScryfallSetCreateOrConnectWithoutCardsInput, { nullable: true })
  connectOrCreate?: ScryfallSetCreateOrConnectWithoutCardsInput;

  @Field(() => ScryfallSetWhereUniqueInput, { nullable: true })
  connect?: ScryfallSetWhereUniqueInput;
}
