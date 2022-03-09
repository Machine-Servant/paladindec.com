import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallSetWhereInput } from './scryfall-set-where.input';

@InputType()
export class ScryfallSetRelationFilter {

    @Field(() => ScryfallSetWhereInput, {nullable:true})
    is?: ScryfallSetWhereInput;

    @Field(() => ScryfallSetWhereInput, {nullable:true})
    isNot?: ScryfallSetWhereInput;
}
