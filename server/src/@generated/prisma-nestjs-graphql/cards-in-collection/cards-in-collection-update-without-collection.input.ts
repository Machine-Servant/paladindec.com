import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateOneRequiredWithoutCollectionsInput } from '../card/card-update-one-required-without-collections.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class CardsInCollectionUpdateWithoutCollectionInput {
  @Field(() => CardUpdateOneRequiredWithoutCollectionsInput, { nullable: true })
  card?: CardUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isEtched?: BoolFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;
}
