import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionCreateManyInput } from './cards-in-collection-create-many.input';

@ArgsType()
export class CreateManyCardsInCollectionArgs {

    @Field(() => [CardsInCollectionCreateManyInput], {nullable:false})
    data!: Array<CardsInCollectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
