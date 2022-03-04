import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-unchecked-create-nested-one-without-current-price-of-card.input';

@InputType()
export class CardUncheckedCreateWithoutCollectionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    scryfallCardId!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;

    @Field(() => ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput, {nullable:true})
    currentPrice?: ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput;
}
