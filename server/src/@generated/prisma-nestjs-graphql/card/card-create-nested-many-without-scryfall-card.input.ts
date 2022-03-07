import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';
import { CardCreateOrConnectWithoutScryfallCardInput } from './card-create-or-connect-without-scryfall-card.input';
import { CardCreateManyScryfallCardInputEnvelope } from './card-create-many-scryfall-card-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedManyWithoutScryfallCardInput {
  @Field(() => [CardCreateWithoutScryfallCardInput], { nullable: true })
  create?: Array<CardCreateWithoutScryfallCardInput>;

  @Field(() => [CardCreateOrConnectWithoutScryfallCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CardCreateOrConnectWithoutScryfallCardInput>;

  @Field(() => CardCreateManyScryfallCardInputEnvelope, { nullable: true })
  createMany?: CardCreateManyScryfallCardInputEnvelope;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;
}
