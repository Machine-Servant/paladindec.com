import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput } from '../scryfall-price/scryfall-price-create-nested-one-without-current-price-of-card.input';
import { CardsInCollectionCreateNestedManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-create-nested-many-without-card.input';

@InputType()
export class CardCreateWithoutScryfallCardInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput, {
    nullable: true,
  })
  currentPrice?: ScryfallPriceCreateNestedOneWithoutCurrentPriceOfCardInput;

  @Field(() => CardsInCollectionCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  collections?: CardsInCollectionCreateNestedManyWithoutCardInput;
}
