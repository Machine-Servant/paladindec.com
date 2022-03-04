import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallCardSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    arenaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mtgoId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mtgoFoilId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    multiverseIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tcgplayerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tcgplayerEtchedId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cardmarketId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cmc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    edhrecRank?: keyof typeof SortOrder;
}
