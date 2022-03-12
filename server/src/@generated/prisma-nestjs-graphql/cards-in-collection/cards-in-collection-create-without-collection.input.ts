import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateNestedOneWithoutCollectionsInput } from '../card/card-create-nested-one-without-collections.input';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCreateWithoutCollectionInput {

    @Field(() => CardCreateNestedOneWithoutCollectionsInput, {nullable:false})
    card!: CardCreateNestedOneWithoutCollectionsInput;

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
