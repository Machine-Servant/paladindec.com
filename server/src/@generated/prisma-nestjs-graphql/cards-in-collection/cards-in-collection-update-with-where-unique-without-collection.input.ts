import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithoutCollectionInput } from './cards-in-collection-update-without-collection.input';

@InputType()
export class CardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput {

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;

    @Field(() => CardsInCollectionUpdateWithoutCollectionInput, {nullable:false})
    data!: CardsInCollectionUpdateWithoutCollectionInput;
}
