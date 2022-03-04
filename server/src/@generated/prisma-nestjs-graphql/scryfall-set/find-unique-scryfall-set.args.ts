import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';

@ArgsType()
export class FindUniqueScryfallSetArgs {

    @Field(() => ScryfallSetWhereUniqueInput, {nullable:false})
    where!: ScryfallSetWhereUniqueInput;
}
