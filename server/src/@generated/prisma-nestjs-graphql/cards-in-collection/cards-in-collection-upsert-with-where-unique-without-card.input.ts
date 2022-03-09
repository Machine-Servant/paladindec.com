import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithoutCardInput } from './cards-in-collection-update-without-card.input';
import { CardsInCollectionCreateWithoutCardInput } from './cards-in-collection-create-without-card.input';

@InputType()
export class CardsInCollectionUpsertWithWhereUniqueWithoutCardInput {

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;

    @Field(() => CardsInCollectionUpdateWithoutCardInput, {nullable:false})
    update!: CardsInCollectionUpdateWithoutCardInput;

    @Field(() => CardsInCollectionCreateWithoutCardInput, {nullable:false})
    create!: CardsInCollectionCreateWithoutCardInput;
}
