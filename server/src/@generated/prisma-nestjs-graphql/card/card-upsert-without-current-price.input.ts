import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutCurrentPriceInput } from './card-update-without-current-price.input';
import { CardCreateWithoutCurrentPriceInput } from './card-create-without-current-price.input';

@InputType()
export class CardUpsertWithoutCurrentPriceInput {

    @Field(() => CardUpdateWithoutCurrentPriceInput, {nullable:false})
    update!: CardUpdateWithoutCurrentPriceInput;

    @Field(() => CardCreateWithoutCurrentPriceInput, {nullable:false})
    create!: CardCreateWithoutCurrentPriceInput;
}
