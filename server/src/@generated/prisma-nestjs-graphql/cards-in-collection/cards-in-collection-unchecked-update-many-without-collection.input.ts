import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutCollectionInput } from './cards-in-collection-create-without-collection.input';
import { CardsInCollectionCreateOrConnectWithoutCollectionInput } from './cards-in-collection-create-or-connect-without-collection.input';
import { CardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput } from './cards-in-collection-upsert-with-where-unique-without-collection.input';
import { CardsInCollectionCreateManyCollectionInputEnvelope } from './cards-in-collection-create-many-collection-input-envelope.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput } from './cards-in-collection-update-with-where-unique-without-collection.input';
import { CardsInCollectionUpdateManyWithWhereWithoutCollectionInput } from './cards-in-collection-update-many-with-where-without-collection.input';
import { CardsInCollectionScalarWhereInput } from './cards-in-collection-scalar-where.input';

@InputType()
export class CardsInCollectionUncheckedUpdateManyWithoutCollectionInput {

    @Field(() => [CardsInCollectionCreateWithoutCollectionInput], {nullable:true})
    create?: Array<CardsInCollectionCreateWithoutCollectionInput>;

    @Field(() => [CardsInCollectionCreateOrConnectWithoutCollectionInput], {nullable:true})
    connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutCollectionInput>;

    @Field(() => [CardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput], {nullable:true})
    upsert?: Array<CardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput>;

    @Field(() => CardsInCollectionCreateManyCollectionInputEnvelope, {nullable:true})
    createMany?: CardsInCollectionCreateManyCollectionInputEnvelope;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    set?: Array<CardsInCollectionWhereUniqueInput>;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    disconnect?: Array<CardsInCollectionWhereUniqueInput>;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    delete?: Array<CardsInCollectionWhereUniqueInput>;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    connect?: Array<CardsInCollectionWhereUniqueInput>;

    @Field(() => [CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput], {nullable:true})
    update?: Array<CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput>;

    @Field(() => [CardsInCollectionUpdateManyWithWhereWithoutCollectionInput], {nullable:true})
    updateMany?: Array<CardsInCollectionUpdateManyWithWhereWithoutCollectionInput>;

    @Field(() => [CardsInCollectionScalarWhereInput], {nullable:true})
    deleteMany?: Array<CardsInCollectionScalarWhereInput>;
}
