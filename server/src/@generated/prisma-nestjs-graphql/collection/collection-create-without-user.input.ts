import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateNestedManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-create-nested-many-without-collection.input';

@InputType()
export class CollectionCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CardsInCollectionCreateNestedManyWithoutCollectionInput, {nullable:true})
    cards?: CardsInCollectionCreateNestedManyWithoutCollectionInput;
}
