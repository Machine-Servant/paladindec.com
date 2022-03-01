import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateOneRequiredWithoutCollectionsInput } from '../card/card-update-one-required-without-collections.input';
import { CollectionUpdateOneRequiredWithoutCardsInput } from '../collection/collection-update-one-required-without-cards.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class CardsInCollectionUpdateInput {
  @Field(() => CardUpdateOneRequiredWithoutCollectionsInput, { nullable: true })
  card?: CardUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => CollectionUpdateOneRequiredWithoutCardsInput, { nullable: true })
  collection?: CollectionUpdateOneRequiredWithoutCardsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;
}
