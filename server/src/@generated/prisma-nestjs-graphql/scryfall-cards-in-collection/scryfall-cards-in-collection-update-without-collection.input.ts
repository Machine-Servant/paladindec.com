import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateOneRequiredWithoutCollectionsInput } from '../scryfall-card/scryfall-card-update-one-required-without-collections.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ScryfallCardsInCollectionUpdateWithoutCollectionInput {
  @Field(() => ScryfallCardUpdateOneRequiredWithoutCollectionsInput, {
    nullable: true,
  })
  card?: ScryfallCardUpdateOneRequiredWithoutCollectionsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  count?: IntFieldUpdateOperationsInput;
}
