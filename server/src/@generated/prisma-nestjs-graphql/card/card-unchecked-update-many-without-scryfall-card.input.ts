import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';
import { CardCreateOrConnectWithoutScryfallCardInput } from './card-create-or-connect-without-scryfall-card.input';
import { CardUpsertWithWhereUniqueWithoutScryfallCardInput } from './card-upsert-with-where-unique-without-scryfall-card.input';
import { CardCreateManyScryfallCardInputEnvelope } from './card-create-many-scryfall-card-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithWhereUniqueWithoutScryfallCardInput } from './card-update-with-where-unique-without-scryfall-card.input';
import { CardUpdateManyWithWhereWithoutScryfallCardInput } from './card-update-many-with-where-without-scryfall-card.input';
import { CardScalarWhereInput } from './card-scalar-where.input';

@InputType()
export class CardUncheckedUpdateManyWithoutScryfallCardInput {
  @Field(() => [CardCreateWithoutScryfallCardInput], { nullable: true })
  create?: Array<CardCreateWithoutScryfallCardInput>;

  @Field(() => [CardCreateOrConnectWithoutScryfallCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CardCreateOrConnectWithoutScryfallCardInput>;

  @Field(() => [CardUpsertWithWhereUniqueWithoutScryfallCardInput], {
    nullable: true,
  })
  upsert?: Array<CardUpsertWithWhereUniqueWithoutScryfallCardInput>;

  @Field(() => CardCreateManyScryfallCardInputEnvelope, { nullable: true })
  createMany?: CardCreateManyScryfallCardInputEnvelope;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  set?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  delete?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardUpdateWithWhereUniqueWithoutScryfallCardInput], {
    nullable: true,
  })
  update?: Array<CardUpdateWithWhereUniqueWithoutScryfallCardInput>;

  @Field(() => [CardUpdateManyWithWhereWithoutScryfallCardInput], {
    nullable: true,
  })
  updateMany?: Array<CardUpdateManyWithWhereWithoutScryfallCardInput>;

  @Field(() => [CardScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardScalarWhereInput>;
}
