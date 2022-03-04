import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallRelatedCardCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    referenceId!: number;

    @Field(() => Int, {nullable:false})
    cardId!: number;

    @Field(() => Int, {nullable:false})
    component!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    typeLine!: number;

    @Field(() => Int, {nullable:false})
    uri!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
