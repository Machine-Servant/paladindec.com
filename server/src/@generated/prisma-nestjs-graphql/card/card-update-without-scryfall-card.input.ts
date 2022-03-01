import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-update-one-without-current-price-of-card.input';
import { CardsInCollectionUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-update-many-without-card.input';

@InputType()
export class CardUpdateWithoutScryfallCardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  currentPrice?: ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput;

  @Field(() => CardsInCollectionUpdateManyWithoutCardInput, { nullable: true })
  collections?: CardsInCollectionUpdateManyWithoutCardInput;
}
