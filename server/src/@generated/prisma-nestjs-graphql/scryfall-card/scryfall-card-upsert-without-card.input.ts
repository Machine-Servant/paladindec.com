import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutCardInput } from './scryfall-card-update-without-card.input';
import { ScryfallCardCreateWithoutCardInput } from './scryfall-card-create-without-card.input';

@InputType()
export class ScryfallCardUpsertWithoutCardInput {

    @Field(() => ScryfallCardUpdateWithoutCardInput, {nullable:false})
    update!: ScryfallCardUpdateWithoutCardInput;

    @Field(() => ScryfallCardCreateWithoutCardInput, {nullable:false})
    create!: ScryfallCardCreateWithoutCardInput;
}
