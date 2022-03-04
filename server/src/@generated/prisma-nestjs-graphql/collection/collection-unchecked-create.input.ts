import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-collection.input';

@InputType()
export class CollectionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput, {nullable:true})
    cards?: CardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput;
}
