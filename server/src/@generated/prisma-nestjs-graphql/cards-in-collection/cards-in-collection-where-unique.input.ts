import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCardIdCollectionIdCompoundUniqueInput } from './cards-in-collection-card-id-collection-id-compound-unique.input';

@InputType()
export class CardsInCollectionWhereUniqueInput {
  @Field(() => CardsInCollectionCardIdCollectionIdCompoundUniqueInput, {
    nullable: true,
  })
  cardId_collectionId?: CardsInCollectionCardIdCollectionIdCompoundUniqueInput;
}
