import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardSumAggregate {

    @Field(() => Int, {nullable:true})
    arenaId?: number;

    @Field(() => Int, {nullable:true})
    mtgoId?: number;

    @Field(() => Int, {nullable:true})
    mtgoFoilId?: number;

    @Field(() => [Int], {nullable:true})
    multiverseIds?: Array<number>;

    @Field(() => Int, {nullable:true})
    tcgplayerId?: number;

    @Field(() => Int, {nullable:true})
    tcgplayerEtchedId?: number;

    @Field(() => Int, {nullable:true})
    cardmarketId?: number;

    @Field(() => Float, {nullable:true})
    cmc?: number;

    @Field(() => Int, {nullable:true})
    edhrecRank?: number;
}
