import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateWithoutCollectionInput } from './scryfall-cards-in-collection-create-without-collection.input';
import { ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput } from './scryfall-cards-in-collection-create-or-connect-without-collection.input';
import { ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput } from './scryfall-cards-in-collection-upsert-with-where-unique-without-collection.input';
import { ScryfallCardsInCollectionCreateManyCollectionInputEnvelope } from './scryfall-cards-in-collection-create-many-collection-input-envelope.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput } from './scryfall-cards-in-collection-update-with-where-unique-without-collection.input';
import { ScryfallCardsInCollectionUpdateManyWithWhereWithoutCollectionInput } from './scryfall-cards-in-collection-update-many-with-where-without-collection.input';
import { ScryfallCardsInCollectionScalarWhereInput } from './scryfall-cards-in-collection-scalar-where.input';

@InputType()
export class ScryfallCardsInCollectionUpdateManyWithoutCollectionInput {
  @Field(() => [ScryfallCardsInCollectionCreateWithoutCollectionInput], {
    nullable: true,
  })
  create?: Array<ScryfallCardsInCollectionCreateWithoutCollectionInput>;

  @Field(
    () => [ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput],
    { nullable: true },
  )
  connectOrCreate?: Array<ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput>;

  @Field(
    () => [
      ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput,
    ],
    { nullable: true },
  )
  upsert?: Array<ScryfallCardsInCollectionUpsertWithWhereUniqueWithoutCollectionInput>;

  @Field(() => ScryfallCardsInCollectionCreateManyCollectionInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallCardsInCollectionCreateManyCollectionInputEnvelope;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  set?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  disconnect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  delete?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;

  @Field(
    () => [
      ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput,
    ],
    { nullable: true },
  )
  update?: Array<ScryfallCardsInCollectionUpdateWithWhereUniqueWithoutCollectionInput>;

  @Field(
    () => [ScryfallCardsInCollectionUpdateManyWithWhereWithoutCollectionInput],
    { nullable: true },
  )
  updateMany?: Array<ScryfallCardsInCollectionUpdateManyWithWhereWithoutCollectionInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereInput], { nullable: true })
  deleteMany?: Array<ScryfallCardsInCollectionScalarWhereInput>;
}
