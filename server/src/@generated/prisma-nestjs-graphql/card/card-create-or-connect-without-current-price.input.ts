import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutCurrentPriceInput } from './card-create-without-current-price.input';

@InputType()
export class CardCreateOrConnectWithoutCurrentPriceInput {

    @Field(() => CardWhereUniqueInput, {nullable:false})
    where!: CardWhereUniqueInput;

    @Field(() => CardCreateWithoutCurrentPriceInput, {nullable:false})
    create!: CardCreateWithoutCurrentPriceInput;
}
