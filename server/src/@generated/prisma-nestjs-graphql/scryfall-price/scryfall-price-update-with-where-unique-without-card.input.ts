import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceUpdateWithoutCardInput } from './scryfall-price-update-without-card.input';

@InputType()
export class ScryfallPriceUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => ScryfallPriceWhereUniqueInput, { nullable: false })
  where!: ScryfallPriceWhereUniqueInput;

  @Field(() => ScryfallPriceUpdateWithoutCardInput, { nullable: false })
  data!: ScryfallPriceUpdateWithoutCardInput;
}
