import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereUniqueInput } from './scryfall-card-name-where-unique.input';

@ArgsType()
export class DeleteOneScryfallCardNameArgs {

    @Field(() => ScryfallCardNameWhereUniqueInput, {nullable:false})
    where!: ScryfallCardNameWhereUniqueInput;
}
