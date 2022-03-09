import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';

@ArgsType()
export class FindUniqueScryfallPriceArgs {

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;
}
