import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-unchecked-update-one-without-current-price-of-card.input';

@InputType()
export class CardUncheckedUpdateWithoutCollectionsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scryfallCardId?: StringFieldUpdateOperationsInput;

  @Field(() => ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  currentPrice?: ScryfallPriceUncheckedUpdateOneWithoutCurrentPriceOfCardInput;
}
