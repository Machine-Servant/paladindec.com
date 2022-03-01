import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateManyCollectionInput } from './scryfall-cards-in-collection-create-many-collection.input';

@InputType()
export class ScryfallCardsInCollectionCreateManyCollectionInputEnvelope {
  @Field(() => [ScryfallCardsInCollectionCreateManyCollectionInput], {
    nullable: false,
  })
  data!: Array<ScryfallCardsInCollectionCreateManyCollectionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
