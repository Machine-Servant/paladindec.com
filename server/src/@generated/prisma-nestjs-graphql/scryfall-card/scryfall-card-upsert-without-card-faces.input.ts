import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutCardFacesInput } from './scryfall-card-update-without-card-faces.input';
import { ScryfallCardCreateWithoutCardFacesInput } from './scryfall-card-create-without-card-faces.input';

@InputType()
export class ScryfallCardUpsertWithoutCardFacesInput {
  @Field(() => ScryfallCardUpdateWithoutCardFacesInput, { nullable: false })
  update!: ScryfallCardUpdateWithoutCardFacesInput;

  @Field(() => ScryfallCardCreateWithoutCardFacesInput, { nullable: false })
  create!: ScryfallCardCreateWithoutCardFacesInput;
}
