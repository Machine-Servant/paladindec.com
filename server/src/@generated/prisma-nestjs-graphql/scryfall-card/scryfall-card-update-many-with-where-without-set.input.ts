import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardScalarWhereInput } from './scryfall-card-scalar-where.input';
import { ScryfallCardUpdateManyMutationInput } from './scryfall-card-update-many-mutation.input';

@InputType()
export class ScryfallCardUpdateManyWithWhereWithoutSetInput {

    @Field(() => ScryfallCardScalarWhereInput, {nullable:false})
    where!: ScryfallCardScalarWhereInput;

    @Field(() => ScryfallCardUpdateManyMutationInput, {nullable:false})
    data!: ScryfallCardUpdateManyMutationInput;
}
