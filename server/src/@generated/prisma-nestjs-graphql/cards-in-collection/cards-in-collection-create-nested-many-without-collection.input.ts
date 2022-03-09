import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutCollectionInput } from './cards-in-collection-create-without-collection.input';
import { CardsInCollectionCreateOrConnectWithoutCollectionInput } from './cards-in-collection-create-or-connect-without-collection.input';
import { CardsInCollectionCreateManyCollectionInputEnvelope } from './cards-in-collection-create-many-collection-input-envelope.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';

@InputType()
export class CardsInCollectionCreateNestedManyWithoutCollectionInput {

    @Field(() => [CardsInCollectionCreateWithoutCollectionInput], {nullable:true})
    create?: Array<CardsInCollectionCreateWithoutCollectionInput>;

    @Field(() => [CardsInCollectionCreateOrConnectWithoutCollectionInput], {nullable:true})
    connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutCollectionInput>;

    @Field(() => CardsInCollectionCreateManyCollectionInputEnvelope, {nullable:true})
    createMany?: CardsInCollectionCreateManyCollectionInputEnvelope;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    connect?: Array<CardsInCollectionWhereUniqueInput>;
}
