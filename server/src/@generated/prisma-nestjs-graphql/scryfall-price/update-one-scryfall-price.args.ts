import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceUpdateInput } from './scryfall-price-update.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';

@ArgsType()
export class UpdateOneScryfallPriceArgs {

    @Field(() => ScryfallPriceUpdateInput, {nullable:false})
    data!: ScryfallPriceUpdateInput;

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;
}
