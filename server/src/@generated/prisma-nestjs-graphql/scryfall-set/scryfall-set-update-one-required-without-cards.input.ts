import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallSetCreateWithoutCardsInput } from './scryfall-set-create-without-cards.input';
import { ScryfallSetCreateOrConnectWithoutCardsInput } from './scryfall-set-create-or-connect-without-cards.input';
import { ScryfallSetUpsertWithoutCardsInput } from './scryfall-set-upsert-without-cards.input';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';
import { ScryfallSetUpdateWithoutCardsInput } from './scryfall-set-update-without-cards.input';

@InputType()
export class ScryfallSetUpdateOneRequiredWithoutCardsInput {
  @Field(() => ScryfallSetCreateWithoutCardsInput, { nullable: true })
  create?: ScryfallSetCreateWithoutCardsInput;

  @Field(() => ScryfallSetCreateOrConnectWithoutCardsInput, { nullable: true })
  connectOrCreate?: ScryfallSetCreateOrConnectWithoutCardsInput;

  @Field(() => ScryfallSetUpsertWithoutCardsInput, { nullable: true })
  upsert?: ScryfallSetUpsertWithoutCardsInput;

  @Field(() => ScryfallSetWhereUniqueInput, { nullable: true })
  connect?: ScryfallSetWhereUniqueInput;

  @Field(() => ScryfallSetUpdateWithoutCardsInput, { nullable: true })
  update?: ScryfallSetUpdateWithoutCardsInput;
}
