import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutCardInput } from '../scryfall-card/scryfall-card-create-nested-one-without-card.input';
import { ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-create-nested-one-without-current-price-of-card.input';

@InputType()
export class CardCreateWithoutCollectionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ScryfallCardCreateNestedOneWithoutCardInput, {nullable:false})
    scryfallCard!: ScryfallCardCreateNestedOneWithoutCardInput;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    isEtched?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;

    @Field(() => ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput, {nullable:true})
    currentPrice?: ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput;
}
