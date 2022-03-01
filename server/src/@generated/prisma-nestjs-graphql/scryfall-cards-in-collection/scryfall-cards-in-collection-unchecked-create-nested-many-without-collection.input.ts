import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateWithoutCollectionInput } from './scryfall-cards-in-collection-create-without-collection.input';
import { ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput } from './scryfall-cards-in-collection-create-or-connect-without-collection.input';
import { ScryfallCardsInCollectionCreateManyCollectionInputEnvelope } from './scryfall-cards-in-collection-create-many-collection-input-envelope.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';

@InputType()
export class ScryfallCardsInCollectionUncheckedCreateNestedManyWithoutCollectionInput {
  @Field(() => [ScryfallCardsInCollectionCreateWithoutCollectionInput], {
    nullable: true,
  })
  create?: Array<ScryfallCardsInCollectionCreateWithoutCollectionInput>;

  @Field(
    () => [ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput],
    { nullable: true },
  )
  connectOrCreate?: Array<ScryfallCardsInCollectionCreateOrConnectWithoutCollectionInput>;

  @Field(() => ScryfallCardsInCollectionCreateManyCollectionInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallCardsInCollectionCreateManyCollectionInputEnvelope;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;
}
