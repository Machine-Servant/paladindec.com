import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereInput } from './scryfall-card-name-where.input';

@ArgsType()
export class DeleteManyScryfallCardNameArgs {

    @Field(() => ScryfallCardNameWhereInput, {nullable:true})
    where?: ScryfallCardNameWhereInput;
}
