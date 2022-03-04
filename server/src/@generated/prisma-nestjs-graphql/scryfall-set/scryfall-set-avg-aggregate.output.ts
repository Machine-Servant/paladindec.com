import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallSetAvgAggregate {

    @Field(() => Float, {nullable:true})
    tcgPlayerId?: number;

    @Field(() => Float, {nullable:true})
    cardCount?: number;

    @Field(() => Float, {nullable:true})
    printedSize?: number;
}
