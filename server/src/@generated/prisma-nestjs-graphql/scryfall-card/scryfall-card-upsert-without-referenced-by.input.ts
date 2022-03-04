import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutReferencedByInput } from './scryfall-card-update-without-referenced-by.input';
import { ScryfallCardCreateWithoutReferencedByInput } from './scryfall-card-create-without-referenced-by.input';

@InputType()
export class ScryfallCardUpsertWithoutReferencedByInput {

    @Field(() => ScryfallCardUpdateWithoutReferencedByInput, {nullable:false})
    update!: ScryfallCardUpdateWithoutReferencedByInput;

    @Field(() => ScryfallCardCreateWithoutReferencedByInput, {nullable:false})
    create!: ScryfallCardCreateWithoutReferencedByInput;
}
