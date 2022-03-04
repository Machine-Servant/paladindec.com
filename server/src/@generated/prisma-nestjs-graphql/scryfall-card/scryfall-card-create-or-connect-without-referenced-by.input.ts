import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutReferencedByInput } from './scryfall-card-create-without-referenced-by.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutReferencedByInput {

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:false})
    where!: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardCreateWithoutReferencedByInput, {nullable:false})
    create!: ScryfallCardCreateWithoutReferencedByInput;
}
