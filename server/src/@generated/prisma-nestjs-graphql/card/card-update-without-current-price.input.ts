import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutCardInput } from '../scryfall-card/scryfall-card-update-one-required-without-card.input';
import { CardsInCollectionUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-update-many-without-card.input';

@InputType()
export class CardUpdateWithoutCurrentPriceInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdateOneRequiredWithoutCardInput, {
    nullable: true,
  })
  scryfallCard?: ScryfallCardUpdateOneRequiredWithoutCardInput;

  @Field(() => CardsInCollectionUpdateManyWithoutCardInput, { nullable: true })
  collections?: CardsInCollectionUpdateManyWithoutCardInput;
}
