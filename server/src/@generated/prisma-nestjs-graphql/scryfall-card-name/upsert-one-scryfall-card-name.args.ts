import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereUniqueInput } from './scryfall-card-name-where-unique.input';
import { ScryfallCardNameCreateInput } from './scryfall-card-name-create.input';
import { ScryfallCardNameUpdateInput } from './scryfall-card-name-update.input';

@ArgsType()
export class UpsertOneScryfallCardNameArgs {

    @Field(() => ScryfallCardNameWhereUniqueInput, {nullable:false})
    where!: ScryfallCardNameWhereUniqueInput;

    @Field(() => ScryfallCardNameCreateInput, {nullable:false})
    create!: ScryfallCardNameCreateInput;

    @Field(() => ScryfallCardNameUpdateInput, {nullable:false})
    update!: ScryfallCardNameUpdateInput;
}
