import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardScalarWhereInput } from './card-scalar-where.input';
import { CardUpdateManyMutationInput } from './card-update-many-mutation.input';

@InputType()
export class CardUpdateManyWithWhereWithoutScryfallCardInput {

    @Field(() => CardScalarWhereInput, {nullable:false})
    where!: CardScalarWhereInput;

    @Field(() => CardUpdateManyMutationInput, {nullable:false})
    data!: CardUpdateManyMutationInput;
}
