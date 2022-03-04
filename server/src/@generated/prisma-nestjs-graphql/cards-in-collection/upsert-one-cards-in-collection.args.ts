import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionCreateInput } from './cards-in-collection-create.input';
import { CardsInCollectionUpdateInput } from './cards-in-collection-update.input';

@ArgsType()
export class UpsertOneCardsInCollectionArgs {

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;

    @Field(() => CardsInCollectionCreateInput, {nullable:false})
    create!: CardsInCollectionCreateInput;

    @Field(() => CardsInCollectionUpdateInput, {nullable:false})
    update!: CardsInCollectionUpdateInput;
}
