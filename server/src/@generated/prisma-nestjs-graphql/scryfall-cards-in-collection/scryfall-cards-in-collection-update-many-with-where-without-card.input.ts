import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionScalarWhereInput } from './scryfall-cards-in-collection-scalar-where.input';
import { ScryfallCardsInCollectionUpdateManyMutationInput } from './scryfall-cards-in-collection-update-many-mutation.input';

@InputType()
export class ScryfallCardsInCollectionUpdateManyWithWhereWithoutCardInput {
  @Field(() => ScryfallCardsInCollectionScalarWhereInput, { nullable: false })
  where!: ScryfallCardsInCollectionScalarWhereInput;

  @Field(() => ScryfallCardsInCollectionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ScryfallCardsInCollectionUpdateManyMutationInput;
}
