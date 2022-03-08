import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereInput } from './cards-in-collection-where.input';

@InputType()
export class CardsInCollectionListRelationFilter {

    @Field(() => CardsInCollectionWhereInput, {nullable:true})
    every?: CardsInCollectionWhereInput;

    @Field(() => CardsInCollectionWhereInput, {nullable:true})
    some?: CardsInCollectionWhereInput;

    @Field(() => CardsInCollectionWhereInput, {nullable:true})
    none?: CardsInCollectionWhereInput;
}
