import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutCardsInput } from './collection-create-without-cards.input';
import { CollectionCreateOrConnectWithoutCardsInput } from './collection-create-or-connect-without-cards.input';
import { CollectionUpsertWithoutCardsInput } from './collection-upsert-without-cards.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateWithoutCardsInput } from './collection-update-without-cards.input';

@InputType()
export class CollectionUpdateOneRequiredWithoutCardsInput {

    @Field(() => CollectionCreateWithoutCardsInput, {nullable:true})
    create?: CollectionCreateWithoutCardsInput;

    @Field(() => CollectionCreateOrConnectWithoutCardsInput, {nullable:true})
    connectOrCreate?: CollectionCreateOrConnectWithoutCardsInput;

    @Field(() => CollectionUpsertWithoutCardsInput, {nullable:true})
    upsert?: CollectionUpsertWithoutCardsInput;

    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    connect?: CollectionWhereUniqueInput;

    @Field(() => CollectionUpdateWithoutCardsInput, {nullable:true})
    update?: CollectionUpdateWithoutCardsInput;
}
