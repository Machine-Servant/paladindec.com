import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';

@InputType()
export class CardCreateOrConnectWithoutScryfallCardInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardCreateWithoutScryfallCardInput, {nullable:false})
    create!: CardCreateWithoutScryfallCardInput;
}
