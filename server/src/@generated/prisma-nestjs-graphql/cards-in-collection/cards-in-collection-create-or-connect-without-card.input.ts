import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionCreateWithoutCardInput } from './cards-in-collection-create-without-card.input';

@InputType()
export class CardsInCollectionCreateOrConnectWithoutCardInput {

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;

    @Field(() => CardsInCollectionCreateWithoutCardInput, {nullable:false})
    create!: CardsInCollectionCreateWithoutCardInput;
}
