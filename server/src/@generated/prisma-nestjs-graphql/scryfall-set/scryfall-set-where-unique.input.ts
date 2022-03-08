import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallSetWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    mtgoCode?: string;

    @Field(() => String, {nullable:true})
    arenaCode?: string;
}
