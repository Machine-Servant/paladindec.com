import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput } from './cards-in-collection-card-id-collection-id-is-foil-is-etched-compound-unique.input';

@InputType()
export class CardsInCollectionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(
    () => CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput,
    { nullable: true },
  )
  cardId_collectionId_isFoil_isEtched?: CardsInCollectionCardIdCollectionIdIsFoilIsEtchedCompoundUniqueInput;
}
