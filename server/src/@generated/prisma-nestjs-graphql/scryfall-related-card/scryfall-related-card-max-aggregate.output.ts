import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ScryfallRelatedCardMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    referenceId?: string;

    @Field(() => String, {nullable:true})
    cardId?: string;

    @Field(() => String, {nullable:true})
    component?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    typeLine?: string;

    @Field(() => String, {nullable:true})
    uri?: string;
}
