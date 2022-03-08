import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutCollectionsInput } from './card-update-without-collections.input';
import { CardCreateWithoutCollectionsInput } from './card-create-without-collections.input';

@InputType()
export class CardUpsertWithoutCollectionsInput {

    @Field(() => CardUpdateWithoutCollectionsInput, {nullable:false})
    update!: CardUpdateWithoutCollectionsInput;

    @Field(() => CardCreateWithoutCollectionsInput, {nullable:false})
    create!: CardCreateWithoutCollectionsInput;
}
