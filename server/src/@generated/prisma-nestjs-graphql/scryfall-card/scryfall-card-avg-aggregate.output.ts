import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardAvgAggregate {

    @Field(() => Float, {nullable:true})
    arenaId?: number;

    @Field(() => Float, {nullable:true})
    mtgoId?: number;

    @Field(() => Float, {nullable:true})
    mtgoFoilId?: number;

    @Field(() => Float, {nullable:true})
    multiverseIds?: number;

    @Field(() => Float, {nullable:true})
    tcgplayerId?: number;

    @Field(() => Float, {nullable:true})
    tcgplayerEtchedId?: number;

    @Field(() => Float, {nullable:true})
    cardmarketId?: number;

    @Field(() => Float, {nullable:true})
    cmc?: number;

    @Field(() => Float, {nullable:true})
    edhrecRank?: number;
}
