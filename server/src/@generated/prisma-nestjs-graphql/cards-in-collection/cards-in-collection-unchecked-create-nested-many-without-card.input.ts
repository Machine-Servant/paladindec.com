import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutCardInput } from './cards-in-collection-create-without-card.input';
import { CardsInCollectionCreateOrConnectWithoutCardInput } from './cards-in-collection-create-or-connect-without-card.input';
import { CardsInCollectionCreateManyCardInputEnvelope } from './cards-in-collection-create-many-card-input-envelope.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';

@InputType()
export class CardsInCollectionUncheckedCreateNestedManyWithoutCardInput {

    @Field(() => [CardsInCollectionCreateWithoutCardInput], {nullable:true})
    create?: Array<CardsInCollectionCreateWithoutCardInput>;

    @Field(() => [CardsInCollectionCreateOrConnectWithoutCardInput], {nullable:true})
    connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutCardInput>;

    @Field(() => CardsInCollectionCreateManyCardInputEnvelope, {nullable:true})
    createMany?: CardsInCollectionCreateManyCardInputEnvelope;

    @Field(() => [CardsInCollectionWhereUniqueInput], {nullable:true})
    connect?: Array<CardsInCollectionWhereUniqueInput>;
}
