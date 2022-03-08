import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ScryfallCardOrderByWithRelationInput } from '../scryfall-card/scryfall-card-order-by-with-relation.input';
import { CardOrderByWithRelationInput } from '../card/card-order-by-with-relation.input';

@InputType()
export class ScryfallPriceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eur?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tix?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eurFoil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usdFoil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usdEtched?: keyof typeof SortOrder;

    @Field(() => ScryfallCardOrderByWithRelationInput, {nullable:true})
    card?: ScryfallCardOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    cardId?: keyof typeof SortOrder;

    @Field(() => CardOrderByWithRelationInput, {nullable:true})
    currentPriceOfCard?: CardOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    currentPriceOfCardId?: keyof typeof SortOrder;
}
