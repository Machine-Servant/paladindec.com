import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateWithoutCardInput } from './scryfall-related-card-create-without-card.input';
import { ScryfallRelatedCardCreateOrConnectWithoutCardInput } from './scryfall-related-card-create-or-connect-without-card.input';
import { ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput } from './scryfall-related-card-upsert-with-where-unique-without-card.input';
import { ScryfallRelatedCardCreateManyCardInputEnvelope } from './scryfall-related-card-create-many-card-input-envelope.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';
import { ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput } from './scryfall-related-card-update-with-where-unique-without-card.input';
import { ScryfallRelatedCardUpdateManyWithWhereWithoutCardInput } from './scryfall-related-card-update-many-with-where-without-card.input';
import { ScryfallRelatedCardScalarWhereInput } from './scryfall-related-card-scalar-where.input';

@InputType()
export class ScryfallRelatedCardUncheckedUpdateManyWithoutCardInput {

    @Field(() => [ScryfallRelatedCardCreateWithoutCardInput], {nullable:true})
    create?: Array<ScryfallRelatedCardCreateWithoutCardInput>;

    @Field(() => [ScryfallRelatedCardCreateOrConnectWithoutCardInput], {nullable:true})
    connectOrCreate?: Array<ScryfallRelatedCardCreateOrConnectWithoutCardInput>;

    @Field(() => [ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput], {nullable:true})
    upsert?: Array<ScryfallRelatedCardUpsertWithWhereUniqueWithoutCardInput>;

    @Field(() => ScryfallRelatedCardCreateManyCardInputEnvelope, {nullable:true})
    createMany?: ScryfallRelatedCardCreateManyCardInputEnvelope;

    @Field(() => [ScryfallRelatedCardWhereUniqueInput], {nullable:true})
    set?: Array<ScryfallRelatedCardWhereUniqueInput>;

    @Field(() => [ScryfallRelatedCardWhereUniqueInput], {nullable:true})
    disconnect?: Array<ScryfallRelatedCardWhereUniqueInput>;

    @Field(() => [ScryfallRelatedCardWhereUniqueInput], {nullable:true})
    delete?: Array<ScryfallRelatedCardWhereUniqueInput>;

    @Field(() => [ScryfallRelatedCardWhereUniqueInput], {nullable:true})
    connect?: Array<ScryfallRelatedCardWhereUniqueInput>;

    @Field(() => [ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput], {nullable:true})
    update?: Array<ScryfallRelatedCardUpdateWithWhereUniqueWithoutCardInput>;

    @Field(() => [ScryfallRelatedCardUpdateManyWithWhereWithoutCardInput], {nullable:true})
    updateMany?: Array<ScryfallRelatedCardUpdateManyWithWhereWithoutCardInput>;

    @Field(() => [ScryfallRelatedCardScalarWhereInput], {nullable:true})
    deleteMany?: Array<ScryfallRelatedCardScalarWhereInput>;
}
