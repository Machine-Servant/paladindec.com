import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateWithoutCurrentPriceOfCardInput } from './scryfall-price-create-without-current-price-of-card.input';
import { ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput } from './scryfall-price-create-or-connect-without-current-price-of-card.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';

@InputType()
export class ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput {

    @Field(() => ScryfallPriceCreateWithoutCurrentPriceOfCardInput, {nullable:true})
    create?: ScryfallPriceCreateWithoutCurrentPriceOfCardInput;

    @Field(() => ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput, {nullable:true})
    connectOrCreate?: ScryfallPriceCreateOrConnectWithoutCurrentPriceOfCardInput;

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:true})
    connect?: ScryfallPriceWhereUniqueInput;
}
