import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutScryfallCardInput } from './card-update-without-scryfall-card.input';

@InputType()
export class CardUpdateWithWhereUniqueWithoutScryfallCardInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutScryfallCardInput, { nullable: false })
  data!: CardUpdateWithoutScryfallCardInput;
}
