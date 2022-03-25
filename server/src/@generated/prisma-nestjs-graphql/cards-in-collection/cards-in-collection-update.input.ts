import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardUpdateOneRequiredWithoutCollectionsInput } from '../card/card-update-one-required-without-collections.input';
import { CollectionUpdateOneRequiredWithoutCardsInput } from '../collection/collection-update-one-required-without-cards.input';
import { TagUpdateManyWithoutCardsInput } from '../tag/tag-update-many-without-cards.input';

@InputType()
export class CardsInCollectionUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isEtched?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => CardUpdateOneRequiredWithoutCollectionsInput, { nullable: true })
  card?: CardUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => CollectionUpdateOneRequiredWithoutCardsInput, { nullable: true })
  collection?: CollectionUpdateOneRequiredWithoutCardsInput;

  @Field(() => TagUpdateManyWithoutCardsInput, { nullable: true })
  tags?: TagUpdateManyWithoutCardsInput;
}
