import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';

@InputType()
export class ScryfallCardListRelationFilter {

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    every?: ScryfallCardWhereInput;

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    some?: ScryfallCardWhereInput;

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    none?: ScryfallCardWhereInput;
}
