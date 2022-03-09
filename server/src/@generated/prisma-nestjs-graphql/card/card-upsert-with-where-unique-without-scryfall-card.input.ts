import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutScryfallCardInput } from './card-update-without-scryfall-card.input';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';

@InputType()
export class CardUpsertWithWhereUniqueWithoutScryfallCardInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardUpdateWithoutScryfallCardInput, {nullable:false})
    update!: CardUpdateWithoutScryfallCardInput;

    @Field(() => CardCreateWithoutScryfallCardInput, {nullable:false})
    create!: CardCreateWithoutScryfallCardInput;
}
