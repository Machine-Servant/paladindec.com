import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCardIdCollectionIdCompoundUniqueInput } from './scryfall-cards-in-collection-card-id-collection-id-compound-unique.input';

@InputType()
export class ScryfallCardsInCollectionWhereUniqueInput {
  @Field(() => ScryfallCardsInCollectionCardIdCollectionIdCompoundUniqueInput, {
    nullable: true,
  })
  cardId_collectionId?: ScryfallCardsInCollectionCardIdCollectionIdCompoundUniqueInput;
}
