import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceCreateInput } from './scryfall-price-create.input';
import { ScryfallPriceUpdateInput } from './scryfall-price-update.input';

@ArgsType()
export class UpsertOneScryfallPriceArgs {

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;

    @Field(() => ScryfallPriceCreateInput, {nullable:false})
    create!: ScryfallPriceCreateInput;

    @Field(() => ScryfallPriceUpdateInput, {nullable:false})
    update!: ScryfallPriceUpdateInput;
}
