import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithoutCardInput } from './cards-in-collection-update-without-card.input';

@InputType()
export class CardsInCollectionUpdateWithWhereUniqueWithoutCardInput {

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;

    @Field(() => CardsInCollectionUpdateWithoutCardInput, {nullable:false})
    data!: CardsInCollectionUpdateWithoutCardInput;
}
