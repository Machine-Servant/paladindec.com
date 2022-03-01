import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionUncheckedCreateNestedManyWithoutCardInput } from '../cards-in-collection/cards-in-collection-unchecked-create-nested-many-without-card.input';

@InputType()
export class CardUncheckedCreateWithoutCurrentPriceInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  scryfallCardId!: string;

  @Field(() => CardsInCollectionUncheckedCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  collections?: CardsInCollectionUncheckedCreateNestedManyWithoutCardInput;
}
