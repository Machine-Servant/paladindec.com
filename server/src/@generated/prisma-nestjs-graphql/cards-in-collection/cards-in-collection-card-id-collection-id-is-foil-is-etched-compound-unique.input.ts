import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    cardId!: string;

    @Field(() => String, {nullable:false})
    collectionId!: string;

    @Field(() => Boolean, {nullable:false})
    isFoil!: boolean;

    @Field(() => Boolean, {nullable:false})
    isEtched!: boolean;
}
