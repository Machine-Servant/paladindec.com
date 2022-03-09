import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetUpdateInput } from './scryfall-set-update.input';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';

@ArgsType()
export class UpdateOneScryfallSetArgs {

    @Field(() => ScryfallSetUpdateInput, {nullable:false})
    data!: ScryfallSetUpdateInput;

    @Field(() => ScryfallSetWhereUniqueInput, {nullable:false})
    where!: ScryfallSetWhereUniqueInput;
}
