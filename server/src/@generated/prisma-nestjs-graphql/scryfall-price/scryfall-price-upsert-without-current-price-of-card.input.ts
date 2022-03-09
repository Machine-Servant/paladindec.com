import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceUpdateWithoutCurrentPriceOfCardInput } from './scryfall-price-update-without-current-price-of-card.input';
import { ScryfallPriceCreateWithoutCurrentPriceOfCardInput } from './scryfall-price-create-without-current-price-of-card.input';

@InputType()
export class ScryfallPriceUpsertWithoutCurrentPriceOfCardInput {

    @Field(() => ScryfallPriceUpdateWithoutCurrentPriceOfCardInput, {nullable:false})
    update!: ScryfallPriceUpdateWithoutCurrentPriceOfCardInput;

    @Field(() => ScryfallPriceCreateWithoutCurrentPriceOfCardInput, {nullable:false})
    create!: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;
}
