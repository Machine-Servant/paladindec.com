import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutSetInput } from './scryfall-card-update-without-set.input';
import { ScryfallCardCreateWithoutSetInput } from './scryfall-card-create-without-set.input';

@InputType()
export class ScryfallCardUpsertWithWhereUniqueWithoutSetInput {

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:false})
    where!: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardUpdateWithoutSetInput, {nullable:false})
    update!: ScryfallCardUpdateWithoutSetInput;

    @Field(() => ScryfallCardCreateWithoutSetInput, {nullable:false})
    create!: ScryfallCardCreateWithoutSetInput;
}
