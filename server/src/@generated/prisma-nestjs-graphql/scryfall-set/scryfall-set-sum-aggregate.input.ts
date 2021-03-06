import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallSetSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    tcgPlayerId?: true;

    @Field(() => Boolean, {nullable:true})
    cardCount?: true;

    @Field(() => Boolean, {nullable:true})
    printedSize?: true;
}
