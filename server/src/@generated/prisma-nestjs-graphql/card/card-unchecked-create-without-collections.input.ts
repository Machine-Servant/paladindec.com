import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-unchecked-create-nested-one-without-current-price-of-card.input';

@InputType()
export class CardUncheckedCreateWithoutCollectionsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  scryfallCardId!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => Boolean, { nullable: true })
  isBorderless?: boolean;

  @Field(() => Boolean, { nullable: true })
  isShowcase?: boolean;

  @Field(() => Boolean, { nullable: true })
  canBeFoil?: boolean;

  @Field(() => String, { nullable: true })
  collectorNumber?: string;

  @Field(() => Boolean, { nullable: true })
  isPaper?: boolean;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Boolean, { nullable: true })
  canBeEtched?: boolean;

  @Field(() => Boolean, { nullable: true })
  canBeNonFoil?: boolean;

  @Field(() => Boolean, { nullable: true })
  isExtendedArt?: boolean;

  @Field(() => Boolean, { nullable: true })
  isRetro?: boolean;

  @Field(
    () => ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput,
    { nullable: true },
  )
  currentPrice?: ScryfallPriceUncheckedCreateNestedOneWithoutCurrentPriceOfCardInput;
}
