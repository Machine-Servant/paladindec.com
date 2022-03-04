import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceCreateWithoutCardInput } from './scryfall-price-create-without-card.input';

@InputType()
export class ScryfallPriceCreateOrConnectWithoutCardInput {

    @Field(() => ScryfallPriceWhereUniqueInput, {nullable:false})
    where!: ScryfallPriceWhereUniqueInput;

    @Field(() => ScryfallPriceCreateWithoutCardInput, {nullable:false})
    create!: ScryfallPriceCreateWithoutCardInput;
}
