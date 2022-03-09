import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateWithoutCardInput } from './scryfall-related-card-create-without-card.input';
import { ScryfallRelatedCardCreateOrConnectWithoutCardInput } from './scryfall-related-card-create-or-connect-without-card.input';
import { ScryfallRelatedCardCreateManyCardInputEnvelope } from './scryfall-related-card-create-many-card-input-envelope.input';
import { ScryfallRelatedCardWhereUniqueInput } from './scryfall-related-card-where-unique.input';

@InputType()
export class ScryfallRelatedCardCreateNestedManyWithoutCardInput {

    @Field(() => [ScryfallRelatedCardCreateWithoutCardInput], {nullable:true})
    create?: Array<ScryfallRelatedCardCreateWithoutCardInput>;

    @Field(() => [ScryfallRelatedCardCreateOrConnectWithoutCardInput], {nullable:true})
    connectOrCreate?: Array<ScryfallRelatedCardCreateOrConnectWithoutCardInput>;

    @Field(() => ScryfallRelatedCardCreateManyCardInputEnvelope, {nullable:true})
    createMany?: ScryfallRelatedCardCreateManyCardInputEnvelope;

    @Field(() => [ScryfallRelatedCardWhereUniqueInput], {nullable:true})
    connect?: Array<ScryfallRelatedCardWhereUniqueInput>;
}
