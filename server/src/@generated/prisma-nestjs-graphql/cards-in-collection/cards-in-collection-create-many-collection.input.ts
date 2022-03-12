import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCreateManyCollectionInput {

    @Field(() => String, {nullable:false})
    cardId!: string;

    @Field(() => Boolean, {nullable:true})
    isFoil?: boolean;

    @Field(() => Boolean, {nullable:true})
    isEtched?: boolean;

    @Field(() => Int, {nullable:true})
    count?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
