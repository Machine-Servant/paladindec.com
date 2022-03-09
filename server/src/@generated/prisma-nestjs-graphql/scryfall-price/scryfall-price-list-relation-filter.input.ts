import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';

@InputType()
export class ScryfallPriceListRelationFilter {

    @Field(() => ScryfallPriceWhereInput, {nullable:true})
    every?: ScryfallPriceWhereInput;

    @Field(() => ScryfallPriceWhereInput, {nullable:true})
    some?: ScryfallPriceWhereInput;

    @Field(() => ScryfallPriceWhereInput, {nullable:true})
    none?: ScryfallPriceWhereInput;
}
