import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardsInCollectionMaxAggregate {

    @Field(() => String, {nullable:true})
    cardId?: string;

    @Field(() => String, {nullable:true})
    collectionId?: string;

    @Field(() => Boolean, {nullable:true})
    isFoil?: boolean;

    @Field(() => Boolean, {nullable:true})
    isEtched?: boolean;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
