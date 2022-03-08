import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameCreateInput } from './scryfall-card-name-create.input';

@ArgsType()
export class CreateOneScryfallCardNameArgs {

    @Field(() => ScryfallCardNameCreateInput, {nullable:false})
    data!: ScryfallCardNameCreateInput;
}
