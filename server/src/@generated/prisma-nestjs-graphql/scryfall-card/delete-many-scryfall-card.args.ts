import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';

@ArgsType()
export class DeleteManyScryfallCardArgs {

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    where?: ScryfallCardWhereInput;
}
