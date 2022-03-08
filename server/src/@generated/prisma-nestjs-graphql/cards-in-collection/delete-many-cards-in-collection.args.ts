import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionWhereInput } from './cards-in-collection-where.input';

@ArgsType()
export class DeleteManyCardsInCollectionArgs {

    @Field(() => CardsInCollectionWhereInput, {nullable:true})
    where?: CardsInCollectionWhereInput;
}
