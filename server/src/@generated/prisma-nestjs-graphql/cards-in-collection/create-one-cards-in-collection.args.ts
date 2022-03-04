import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionCreateInput } from './cards-in-collection-create.input';

@ArgsType()
export class CreateOneCardsInCollectionArgs {

    @Field(() => CardsInCollectionCreateInput, {nullable:false})
    data!: CardsInCollectionCreateInput;
}
