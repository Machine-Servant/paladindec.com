import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutScryfallPriceInput } from './scryfall-card-create-without-scryfall-price.input';
import { ScryfallCardCreateOrConnectWithoutScryfallPriceInput } from './scryfall-card-create-or-connect-without-scryfall-price.input';
import { ScryfallCardUpsertWithoutScryfallPriceInput } from './scryfall-card-upsert-without-scryfall-price.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutScryfallPriceInput } from './scryfall-card-update-without-scryfall-price.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutScryfallPriceInput {

    @Field(() => ScryfallCardCreateWithoutScryfallPriceInput, {nullable:true})
    create?: ScryfallCardCreateWithoutScryfallPriceInput;

    @Field(() => ScryfallCardCreateOrConnectWithoutScryfallPriceInput, {nullable:true})
    connectOrCreate?: ScryfallCardCreateOrConnectWithoutScryfallPriceInput;

    @Field(() => ScryfallCardUpsertWithoutScryfallPriceInput, {nullable:true})
    upsert?: ScryfallCardUpsertWithoutScryfallPriceInput;

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:true})
    connect?: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardUpdateWithoutScryfallPriceInput, {nullable:true})
    update?: ScryfallCardUpdateWithoutScryfallPriceInput;
}
