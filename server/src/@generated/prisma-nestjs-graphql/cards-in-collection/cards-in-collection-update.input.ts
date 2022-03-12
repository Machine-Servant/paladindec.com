import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateOneRequiredWithoutCollectionsInput } from '../card/card-update-one-required-without-collections.input';
import { CollectionUpdateOneRequiredWithoutCardsInput } from '../collection/collection-update-one-required-without-cards.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionUpdateInput {
  @Field(() => CardUpdateOneRequiredWithoutCollectionsInput, { nullable: true })
  card?: CardUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => CollectionUpdateOneRequiredWithoutCardsInput, { nullable: true })
  collection?: CollectionUpdateOneRequiredWithoutCardsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isEtched?: BoolFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
