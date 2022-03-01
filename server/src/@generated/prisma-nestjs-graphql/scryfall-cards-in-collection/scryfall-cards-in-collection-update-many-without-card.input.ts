import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateWithoutCardInput } from './scryfall-cards-in-collection-create-without-card.input';
import { ScryfallCardsInCollectionCreateOrConnectWithoutCardInput } from './scryfall-cards-in-collection-create-or-connect-without-card.input';
import { ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCardInput } from './scryfall-cards-in-collection-upsert-with-where-unique-without-card.input';
import { ScryfallCardsInCollectionCreateManyCardInputEnvelope } from './scryfall-cards-in-collection-create-many-card-input-envelope.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCardInput } from './scryfall-cards-in-collection-update-with-where-unique-without-card.input';
import { ScryfallCardsInCollectionUpdateManyWithWhereWithoutCardInput } from './scryfall-cards-in-collection-update-many-with-where-without-card.input';
import { ScryfallCardsInCollectionScalarWhereInput } from './scryfall-cards-in-collection-scalar-where.input';

@InputType()
export class ScryfallCardsInCollectionUpdateManyWithoutCardInput {
  @Field(() => [ScryfallCardsInCollectionCreateWithoutCardInput], {
    nullable: true,
  })
  create?: Array<ScryfallCardsInCollectionCreateWithoutCardInput>;

  @Field(() => [ScryfallCardsInCollectionCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallCardsInCollectionCreateOrConnectWithoutCardInput>;

  @Field(
    () => [ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCardInput],
    { nullable: true },
  )
  upsert?: Array<ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => ScryfallCardsInCollectionCreateManyCardInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallCardsInCollectionCreateManyCardInputEnvelope;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  set?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  disconnect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  delete?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(
    () => [ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCardInput],
    { nullable: true },
  )
  update?: Array<ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [ScryfallCardsInCollectionUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<ScryfallCardsInCollectionUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereInput], { nullable: true })
  deleteMany?: Array<ScryfallCardsInCollectionScalarWhereInput>;
}
