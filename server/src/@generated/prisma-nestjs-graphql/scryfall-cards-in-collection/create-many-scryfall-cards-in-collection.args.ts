import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionCreateManyInput } from './scryfall-cards-in-collection-create-many.input';

@ArgsType()
export class CreateManyScryfallCardsInCollectionArgs {
  @Field(() => [ScryfallCardsInCollectionCreateManyInput], { nullable: false })
  data!: Array<ScryfallCardsInCollectionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
