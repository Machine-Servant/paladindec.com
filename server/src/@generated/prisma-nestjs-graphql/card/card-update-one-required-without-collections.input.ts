import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCollectionsInput } from './card-create-without-collections.input';
import { CardCreateOrConnectWithoutCollectionsInput } from './card-create-or-connect-without-collections.input';
import { CardUpsertWithoutCollectionsInput } from './card-upsert-without-collections.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutCollectionsInput } from './card-update-without-collections.input';

@InputType()
export class CardUpdateOneRequiredWithoutCollectionsInput {

    @Field(() => CardCreateWithoutCollectionsInput, {nullable:true})
    create?: CardCreateWithoutCollectionsInput;

    @Field(() => CardCreateOrConnectWithoutCollectionsInput, {nullable:true})
    connectOrCreate?: CardCreateOrConnectWithoutCollectionsInput;

    @Field(() => CardUpsertWithoutCollectionsInput, {nullable:true})
    upsert?: CardUpsertWithoutCollectionsInput;

    @Field(() => CardWhereUniqueInput, {nullable:true})
    connect?: CardWhereUniqueInput;

    @Field(() => CardUpdateWithoutCollectionsInput, {nullable:true})
    update?: CardUpdateWithoutCollectionsInput;
}
