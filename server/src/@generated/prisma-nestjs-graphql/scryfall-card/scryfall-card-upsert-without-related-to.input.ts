import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutRelatedToInput } from './scryfall-card-update-without-related-to.input';
import { ScryfallCardCreateWithoutRelatedToInput } from './scryfall-card-create-without-related-to.input';

@InputType()
export class ScryfallCardUpsertWithoutRelatedToInput {
  @Field(() => ScryfallCardUpdateWithoutRelatedToInput, { nullable: false })
  update!: ScryfallCardUpdateWithoutRelatedToInput;

  @Field(() => ScryfallCardCreateWithoutRelatedToInput, { nullable: false })
  create!: ScryfallCardCreateWithoutRelatedToInput;
}
