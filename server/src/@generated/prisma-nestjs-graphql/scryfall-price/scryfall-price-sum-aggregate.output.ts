import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallPriceSumAggregate {

    @Field(() => Float, {nullable:true})
    eur?: number;

    @Field(() => Float, {nullable:true})
    tix?: number;

    @Field(() => Float, {nullable:true})
    usd?: number;

    @Field(() => Float, {nullable:true})
    eurFoil?: number;

    @Field(() => Float, {nullable:true})
    usdFoil?: number;

    @Field(() => Float, {nullable:true})
    usdEtched?: number;
}
