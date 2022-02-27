import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutCardFacesInput } from './card-update-without-card-faces.input';
import { CardCreateWithoutCardFacesInput } from './card-create-without-card-faces.input';

@InputType()
export class CardUpsertWithoutCardFacesInput {
  @Field(() => CardUpdateWithoutCardFacesInput, { nullable: false })
  update!: CardUpdateWithoutCardFacesInput;

  @Field(() => CardCreateWithoutCardFacesInput, { nullable: false })
  create!: CardCreateWithoutCardFacesInput;
}
