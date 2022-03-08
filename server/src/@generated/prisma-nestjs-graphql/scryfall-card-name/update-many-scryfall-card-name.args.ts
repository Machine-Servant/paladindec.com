import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameUpdateManyMutationInput } from './scryfall-card-name-update-many-mutation.input';
import { ScryfallCardNameWhereInput } from './scryfall-card-name-where.input';

@ArgsType()
export class UpdateManyScryfallCardNameArgs {

    @Field(() => ScryfallCardNameUpdateManyMutationInput, {nullable:false})
    data!: ScryfallCardNameUpdateManyMutationInput;

    @Field(() => ScryfallCardNameWhereInput, {nullable:true})
    where?: ScryfallCardNameWhereInput;
}
