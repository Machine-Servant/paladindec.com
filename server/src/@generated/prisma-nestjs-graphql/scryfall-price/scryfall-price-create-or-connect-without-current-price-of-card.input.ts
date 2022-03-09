import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceCreateWithoutCurrentPriceOfCardInput } from './scryfall-price-create-without-current-price-of-card.input';

@InputType()
export class ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput {

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;

    @Field(() => ScryfallPriceCreateWithoutCurrentPriceOfCardInput, {nullable:false})
    create!: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;
}
