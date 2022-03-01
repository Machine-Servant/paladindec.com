import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateManyCardInput } from './scryfall-cards-in-collection-create-many-card.input';

@InputType()
export class ScryfallCardsInCollectionCreateManyCardInputEnvelope {
  @Field(() => [ScryfallCardsInCollectionCreateManyCardInput], {
    nullable: false,
  })
  data!: Array<ScryfallCardsInCollectionCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
