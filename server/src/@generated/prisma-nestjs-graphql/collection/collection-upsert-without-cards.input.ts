import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionUpdateWithoutCardsInput } from './collection-update-without-cards.input';
import { CollectionCreateWithoutCardsInput } from './collection-create-without-cards.input';

@InputType()
export class CollectionUpsertWithoutCardsInput {

    @Field(() => CollectionUpdateWithoutCardsInput, {nullable:false})
    update!: CollectionUpdateWithoutCardsInput;

    @Field(() => CollectionCreateWithoutCardsInput, {nullable:false})
    create!: CollectionCreateWithoutCardsInput;
}
