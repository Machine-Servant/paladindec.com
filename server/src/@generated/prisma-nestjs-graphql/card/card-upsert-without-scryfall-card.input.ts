import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutScryfallCardInput } from './card-update-without-scryfall-card.input';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';

@InputType()
export class CardUpsertWithoutScryfallCardInput {
  @Field(() => CardUpdateWithoutScryfallCardInput, { nullable: false })
  update!: CardUpdateWithoutScryfallCardInput;

  @Field(() => CardCreateWithoutScryfallCardInput, { nullable: false })
  create!: CardCreateWithoutScryfallCardInput;
}
