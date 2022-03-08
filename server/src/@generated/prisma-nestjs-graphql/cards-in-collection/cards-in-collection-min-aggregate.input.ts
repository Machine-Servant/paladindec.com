import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    cardId?: true;

    @Field(() => Boolean, {nullable:true})
    collectionId?: true;

    @Field(() => Boolean, {nullable:true})
    isFoil?: true;

    @Field(() => Boolean, {nullable:true})
    isEtched?: true;

    @Field(() => Boolean, {nullable:true})
    count?: true;
}
