import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceUpdateWithoutCardInput } from './scryfall-price-update-without-card.input';
import { ScryfallPriceCreateWithoutCardInput } from './scryfall-price-create-without-card.input';

@InputType()
export class ScryfallPriceUpsertWithWhereUniqueWithoutCardInput {

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;

    @Field(() => ScryfallPriceUpdateWithoutCardInput, {nullable:false})
    update!: ScryfallPriceUpdateWithoutCardInput;

    @Field(() => ScryfallPriceCreateWithoutCardInput, {nullable:false})
    create!: ScryfallPriceCreateWithoutCardInput;
}
