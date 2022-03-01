import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardUpdateWithoutCollectionsInput } from './scryfall-card-update-without-collections.input';
import { ScryfallCardCreateWithoutCollectionsInput } from './scryfall-card-create-without-collections.input';

@InputType()
export class ScryfallCardUpsertWithoutCollectionsInput {
  @Field(() => ScryfallCardUpdateWithoutCollectionsInput, { nullable: false })
  update!: ScryfallCardUpdateWithoutCollectionsInput;

  @Field(() => ScryfallCardCreateWithoutCollectionsInput, { nullable: false })
  create!: ScryfallCardCreateWithoutCollectionsInput;
}
