import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCardIdCollectionIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    cardId!: string;

    @Field(() => String, {nullable:false})
    collectionId!: string;
}
