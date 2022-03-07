import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutScryfallPriceInput } from './scryfall-card-update-without-scryfall-price.input';
import { ScryfallCardCreateWithoutScryfallPriceInput } from './scryfall-card-create-without-scryfall-price.input';

@InputType()
export class ScryfallCardUpsertWithoutScryfallPriceInput {
  @Field(() => ScryfallCardUpdateWithoutScryfallPriceInput, { nullable: false })
  update!: ScryfallCardUpdateWithoutScryfallPriceInput;

  @Field(() => ScryfallCardCreateWithoutScryfallPriceInput, { nullable: false })
  create!: ScryfallCardCreateWithoutScryfallPriceInput;
}
