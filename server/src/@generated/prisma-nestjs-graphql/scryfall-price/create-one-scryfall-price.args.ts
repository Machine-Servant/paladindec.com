import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceCreateInput } from './scryfall-price-create.input';

@ArgsType()
export class CreateOneScryfallPriceArgs {

    @Field(() => ScryfallPriceCreateInput, {nullable:false})
    data!: ScryfallPriceCreateInput;
}
