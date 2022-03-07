import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateWithoutCurrentPriceOfCardInput } from './scryfall-price-create-without-current-price-of-card.input';
import { ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput } from './scryfall-price-create-or-connect-without-current-price-of-card.input';
import { ScryfallPriceUpsertWithoutCurrentPriceOfCardInput } from './scryfall-price-upsert-without-current-price-of-card.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceUpdateWithoutCurrentPriceOfCardInput } from './scryfall-price-update-without-current-price-of-card.input';

@InputType()
export class ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput {
  @Field(() => ScryfallPriceCreateWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  create?: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;

  @Field(() => ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput;

  @Field(() => ScryfallPriceUpsertWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  upsert?: ScryfallPriceUpsertWithoutCurrentPriceOfCardInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => ScryfallPriceWhereUniqueInput, { nullable: true })
  connect?: ScryfallPriceWhereUniqueInput;

  @Field(() => ScryfallPriceUpdateWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  update?: ScryfallPriceUpdateWithoutCurrentPriceOfCardInput;
}
