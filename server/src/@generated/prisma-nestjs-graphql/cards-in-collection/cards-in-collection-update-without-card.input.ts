import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionUpdateOneRequiredWithoutCardsInput } from '../collection/collection-update-one-required-without-cards.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class CardsInCollectionUpdateWithoutCardInput {
  @Field(() => CollectionUpdateOneRequiredWithoutCardsInput, { nullable: true })
  collection?: CollectionUpdateOneRequiredWithoutCardsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isEtched?: BoolFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;
}
