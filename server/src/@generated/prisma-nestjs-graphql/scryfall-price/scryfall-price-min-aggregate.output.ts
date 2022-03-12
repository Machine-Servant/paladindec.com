import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallPriceMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    cardId?: string;

    @Field(() => String, {nullable:true})
    currentPriceOfCardId?: string;
}
