import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutCardInput } from '../scryfall-card/scryfall-card-update-one-required-without-card.input';
import { ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-update-one-without-current-price-of-card.input';

@InputType()
export class CardUpdateWithoutCollectionsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdateOneRequiredWithoutCardInput, {
    nullable: true,
  })
  scryfallCard?: ScryfallCardUpdateOneRequiredWithoutCardInput;

  @Field(() => ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  currentPrice?: ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput;
}
