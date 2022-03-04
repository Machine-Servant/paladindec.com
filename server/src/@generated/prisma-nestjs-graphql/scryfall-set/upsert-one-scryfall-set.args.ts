import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';
import { ScryfallSetCreateInput } from './scryfall-set-create.input';
import { ScryfallSetUpdateInput } from './scryfall-set-update.input';

@ArgsType()
export class UpsertOneScryfallSetArgs {

    @Field(() => ScryfallSetWhereUniqueInput, {nullable:false})
    where!: ScryfallSetWhereUniqueInput;

    @Field(() => ScryfallSetCreateInput, {nullable:false})
    create!: ScryfallSetCreateInput;

    @Field(() => ScryfallSetUpdateInput, {nullable:false})
    update!: ScryfallSetUpdateInput;
}
