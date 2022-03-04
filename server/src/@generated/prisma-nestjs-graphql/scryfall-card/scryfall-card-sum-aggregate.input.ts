import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    arenaId?: true;

    @Field(() => Boolean, {nullable:true})
    mtgoId?: true;

    @Field(() => Boolean, {nullable:true})
    mtgoFoilId?: true;

    @Field(() => Boolean, {nullable:true})
    multiverseIds?: true;

    @Field(() => Boolean, {nullable:true})
    tcgplayerId?: true;

    @Field(() => Boolean, {nullable:true})
    tcgplayerEtchedId?: true;

    @Field(() => Boolean, {nullable:true})
    cardmarketId?: true;

    @Field(() => Boolean, {nullable:true})
    cmc?: true;

    @Field(() => Boolean, {nullable:true})
    edhrecRank?: true;
}
