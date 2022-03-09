import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameUpdateInput } from './scryfall-card-name-update.input';
import { ScryfallCardNameWhereUniqueInput } from './scryfall-card-name-where-unique.input';

@ArgsType()
export class UpdateOneScryfallCardNameArgs {

    @Field(() => ScryfallCardNameUpdateInput, {nullable:false})
    data!: ScryfallCardNameUpdateInput;

    @Field(() => ScryfallCardNameWhereUniqueInput, {nullable:false})
    where!: ScryfallCardNameWhereUniqueInput;
}
