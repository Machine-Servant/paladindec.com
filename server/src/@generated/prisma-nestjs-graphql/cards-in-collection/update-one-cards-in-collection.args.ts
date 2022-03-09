import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionUpdateInput } from './cards-in-collection-update.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';

@ArgsType()
export class UpdateOneCardsInCollectionArgs {

    @Field(() => CardsInCollectionUpdateInput, {nullable:false})
    data!: CardsInCollectionUpdateInput;

    @Field(() => CardsInCollectionWhereUniqueInput, {nullable:false})
    where!: CardsInCollectionWhereUniqueInput;
}
