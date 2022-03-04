import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutSetInput } from './scryfall-card-create-without-set.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutSetInput {

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:false})
    where!: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardCreateWithoutSetInput, {nullable:false})
    create!: ScryfallCardCreateWithoutSetInput;
}
