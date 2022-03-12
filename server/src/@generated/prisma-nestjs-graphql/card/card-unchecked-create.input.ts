import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-unchecked-create-nested-one-without-current-price-of-card.input';
import { CardsInCollectionUncheckedCreateNestedManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-card.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  scryfallCardId!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  collectorNumber?: string;

  @Field(() => Boolean, { nullable: true })
  isBorderless?: boolean;

  @Field(() => Boolean, { nullable: true })
  isShowcase?: boolean;

  @Field(() => Boolean, { nullable: true })
  isPaper?: boolean;

  @Field(() => Boolean, { nullable: true })
  isExtendedArt?: boolean;

  @Field(() => Boolean, { nullable: true })
  isRetro?: boolean;

  @Field(() => Boolean, { nullable: true })
  canBeNonFoil?: boolean;

  @Field(() => Boolean, { nullable: true })
  canBeFoil?: boolean;

  @Field(() => Boolean, { nullable: true })
  canBeEtched?: boolean;

  @Field(
    () => ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput,
    { nullable: true },
  )
  currentPrice?: ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput;

  @Field(() => CardsInCollectionUncheckedCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  collections?: CardsInCollectionUncheckedCreateNestedManyWithoutCardInput;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
