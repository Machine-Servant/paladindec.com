import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ScryfallCardUpdateOneRequiredWithoutCardInput } from '../scryfall-card/scryfall-card-update-one-required-without-card.input';
import { CardsInCollectionUpdateManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-update-many-without-card.input';
import { ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-update-one-without-current-price-of-card.input';

@InputType()
export class CardUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isBorderless?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isShowcase?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  canBeFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  collectorNumber?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaper?: BoolFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  canBeEtched?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  canBeNonFoil?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isExtendedArt?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isRetro?: BoolFieldUpdateOperationsInput;

  @Field(() => ScryfallCardUpdateOneRequiredWithoutCardInput, {
    nullable: true,
  })
  scryfallCard?: ScryfallCardUpdateOneRequiredWithoutCardInput;

  @Field(() => CardsInCollectionUpdateManyWithoutCardInput, { nullable: true })
  collections?: CardsInCollectionUpdateManyWithoutCardInput;

  @Field(() => ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  currentPrice?: ScryfallPriceUpdateOneWithoutCurrentPriceOfCardInput;
}
