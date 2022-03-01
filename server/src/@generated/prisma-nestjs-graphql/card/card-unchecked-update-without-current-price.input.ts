import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardsInCollectionUncheckedUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-unchecked-update-many-without-card.input';

@InputType()
export class CardUncheckedUpdateWithoutCurrentPriceInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scryfallCardId?: StringFieldUpdateOperationsInput;

  @Field(() => CardsInCollectionUncheckedUpdateManyWithoutCardInput, {
    nullable: true,
  })
  collections?: CardsInCollectionUncheckedUpdateManyWithoutCardInput;
}
