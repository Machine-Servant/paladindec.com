import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCollectionsInput } from '../user/user-create-nested-one-without-collections.input';
import { CardsInCollectionCreateNestedManyWithoutCollectionInput } from '../cards-in-collection/cards-in-collection-create-nested-many-without-collection.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CollectionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutCollectionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCollectionsInput;

    @Field(() => CardsInCollectionCreateNestedManyWithoutCollectionInput, {nullable:true})
    cards?: CardsInCollectionCreateNestedManyWithoutCollectionInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
