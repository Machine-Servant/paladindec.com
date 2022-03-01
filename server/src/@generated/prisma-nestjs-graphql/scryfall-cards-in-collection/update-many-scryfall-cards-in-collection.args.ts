import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionUpdateManyMutationInput } from './scryfall-cards-in-collection-update-many-mutation.input';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';

@ArgsType()
export class UpdateManyScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ScryfallCardsInCollectionUpdateManyMutationInput;

  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  where?: ScryfallCardsInCollectionWhereInput;
}
