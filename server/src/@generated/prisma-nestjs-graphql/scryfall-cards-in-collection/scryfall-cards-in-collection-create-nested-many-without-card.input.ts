import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateWithoutCardInput } from './scryfall-cards-in-collection-create-without-card.input';
import { ScryfallCardsInCollectionCreateOrConnectWithoutCardInput } from './scryfall-cards-in-collection-create-or-connect-without-card.input';
import { ScryfallCardsInCollectionCreateManyCardInputEnvelope } from './scryfall-cards-in-collection-create-many-card-input-envelope.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';

@InputType()
export class ScryfallCardsInCollectionCreateNestedManyWithoutCardInput {
  @Field(() => [ScryfallCardsInCollectionCreateWithoutCardInput], {
    nullable: true,
  })
  create?: Array<ScryfallCardsInCollectionCreateWithoutCardInput>;

  @Field(() => [ScryfallCardsInCollectionCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallCardsInCollectionCreateOrConnectWithoutCardInput>;

  @Field(() => ScryfallCardsInCollectionCreateManyCardInputEnvelope, {
    nullable: true,
  })
  createMany?: ScryfallCardsInCollectionCreateManyCardInputEnvelope;

  @Field(() => [ScryfallCardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardsInCollectionWhereUniqueInput>;
}
