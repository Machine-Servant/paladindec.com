import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateManyScryfallCardInput } from './card-create-many-scryfall-card.input';

@InputType()
export class CardCreateManyScryfallCardInputEnvelope {
  @Field(() => [CardCreateManyScryfallCardInput], { nullable: false })
  data!: Array<CardCreateManyScryfallCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
