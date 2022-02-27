import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutRelatedToInput } from './card-update-without-related-to.input';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';

@InputType()
export class CardUpsertWithoutRelatedToInput {
  @Field(() => CardUpdateWithoutRelatedToInput, { nullable: false })
  update!: CardUpdateWithoutRelatedToInput;

  @Field(() => CardCreateWithoutRelatedToInput, { nullable: false })
  create!: CardCreateWithoutRelatedToInput;
}
