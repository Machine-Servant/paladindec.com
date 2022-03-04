import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateWithoutCardInput } from './scryfall-price-create-without-card.input';
import { ScryfallPriceCreateOrConnectWithoutCardInput } from './scryfall-price-create-or-connect-without-card.input';
import { ScryfallPriceUpsertWithWhereUniqueWithoutCardInput } from './scryfall-price-upsert-with-where-unique-without-card.input';
import { ScryfallPriceCreateManyCardInputEnvelope } from './scryfall-price-create-many-card-input-envelope.input';
import { ScryfallPriceWhereUniqueInput } from './scryfall-price-where-unique.input';
import { ScryfallPriceUpdateWithWhereUniqueWithoutCardInput } from './scryfall-price-update-with-where-unique-without-card.input';
import { ScryfallPriceUpdateManyWithWhereWithoutCardInput } from './scryfall-price-update-many-with-where-without-card.input';
import { ScryfallPriceScalarWhereInput } from './scryfall-price-scalar-where.input';

@InputType()
export class ScryfallPriceUpdateManyWithoutCardInput {

    @Field(() => [ScryfallPriceCreateWithoutCardInput], {nullable:true})
    create?: Array<ScryfallPriceCreateWithoutCardInput>;

    @Field(() => [ScryfallPriceCreateOrConnectWithoutCardInput], {nullable:true})
    connectOrCreate?: Array<ScryfallPriceCreateOrConnectWithoutCardInput>;

    @Field(() => [ScryfallPriceUpsertWithWhereUniqueWithoutCardInput], {nullable:true})
    upsert?: Array<ScryfallPriceUpsertWithWhereUniqueWithoutCardInput>;

    @Field(() => ScryfallPriceCreateManyCardInputEnvelope, {nullable:true})
    createMany?: ScryfallPriceCreateManyCardInputEnvelope;

    @Field(() => [ScryfallPriceWhereUniqueInput], {nullable:true})
    set?: Array<ScryfallPriceWhereUniqueInput>;

    @Field(() => [ScryfallPriceWhereUniqueInput], {nullable:true})
    disconnect?: Array<ScryfallPriceWhereUniqueInput>;

    @Field(() => [ScryfallPriceWhereUniqueInput], {nullable:true})
    delete?: Array<ScryfallPriceWhereUniqueInput>;

    @Field(() => [ScryfallPriceWhereUniqueInput], {nullable:true})
    connect?: Array<ScryfallPriceWhereUniqueInput>;

    @Field(() => [ScryfallPriceUpdateWithWhereUniqueWithoutCardInput], {nullable:true})
    update?: Array<ScryfallPriceUpdateWithWhereUniqueWithoutCardInput>;

    @Field(() => [ScryfallPriceUpdateManyWithWhereWithoutCardInput], {nullable:true})
    updateMany?: Array<ScryfallPriceUpdateManyWithWhereWithoutCardInput>;

    @Field(() => [ScryfallPriceScalarWhereInput], {nullable:true})
    deleteMany?: Array<ScryfallPriceScalarWhereInput>;
}
