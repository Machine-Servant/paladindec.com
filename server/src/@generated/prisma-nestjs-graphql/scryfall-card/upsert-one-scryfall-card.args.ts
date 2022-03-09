import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateInput } from './scryfall-card-create.input';
import { ScryfallCardUpdateInput } from './scryfall-card-update.input';

@ArgsType()
export class UpsertOneScryfallCardArgs {

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:false})
    where!: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardCreateInput, {nullable:false})
    create!: ScryfallCardCreateInput;

    @Field(() => ScryfallCardUpdateInput, {nullable:false})
    update!: ScryfallCardUpdateInput;
}
