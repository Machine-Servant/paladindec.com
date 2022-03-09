import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallPriceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    eur?: true;

    @Field(() => Boolean, {nullable:true})
    tix?: true;

    @Field(() => Boolean, {nullable:true})
    usd?: true;

    @Field(() => Boolean, {nullable:true})
    eurFoil?: true;

    @Field(() => Boolean, {nullable:true})
    usdFoil?: true;

    @Field(() => Boolean, {nullable:true})
    usdEtched?: true;
}
