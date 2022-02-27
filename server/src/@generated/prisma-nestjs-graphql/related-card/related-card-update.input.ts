import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CardUpdateOneRequiredWithoutReferencedByInput } from '../card/card-update-one-required-without-referenced-by.input';
import { CardUpdateOneRequiredWithoutRelatedToInput } from '../card/card-update-one-required-without-related-to.input';

@InputType()
export class RelatedCardUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => CardUpdateOneRequiredWithoutReferencedByInput, {
    nullable: true,
  })
  reference?: CardUpdateOneRequiredWithoutReferencedByInput;

  @Field(() => CardUpdateOneRequiredWithoutRelatedToInput, { nullable: true })
  card?: CardUpdateOneRequiredWithoutRelatedToInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  component?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeLine?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  uri?: StringFieldUpdateOperationsInput;
}
