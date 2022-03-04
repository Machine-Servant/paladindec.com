import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutScryfallPriceInput } from '../scryfall-card/scryfall-card-create-nested-one-without-scryfall-price.input';

@InputType()
export class ScryfallPriceCreateWithoutCurrentPriceOfCardInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Float, {nullable:true})
    eur?: number;

    @Field(() => Float, {nullable:true})
    tix?: number;

    @Field(() => Float, {nullable:true})
    usd?: number;

    @Field(() => Float, {nullable:true})
    eurFoil?: number;

    @Field(() => Float, {nullable:true})
    usdFoil?: number;

    @Field(() => Float, {nullable:true})
    usdEtched?: number;

    @Field(() => ScryfallCardCreateNestedOneWithoutScryfallPriceInput, {nullable:false})
    card!: ScryfallCardCreateNestedOneWithoutScryfallPriceInput;
}