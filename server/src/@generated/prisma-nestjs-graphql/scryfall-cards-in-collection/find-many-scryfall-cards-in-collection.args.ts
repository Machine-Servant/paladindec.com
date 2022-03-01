import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardsInCollectionWhereInput } from './scryfall-cards-in-collection-where.input';
import { ScryfallCardsInCollectionOrderByWithRelationInput } from './scryfall-cards-in-collection-order-by-with-relation.input';
import { ScryfallCardsInCollectionWhereUniqueInput } from './scryfall-cards-in-collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardsInCollectionScalarFieldEnum } from './scryfall-cards-in-collection-scalar-field.enum';

@ArgsType()
export class FindManyScryfallCardsInCollectionArgs {
  @Field(() => ScryfallCardsInCollectionWhereInput, { nullable: true })
  where?: ScryfallCardsInCollectionWhereInput;

  @Field(() => [ScryfallCardsInCollectionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Array<ScryfallCardsInCollectionOrderByWithRelationInput>;

  @Field(() => ScryfallCardsInCollectionWhereUniqueInput, { nullable: true })
  cursor?: ScryfallCardsInCollectionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ScryfallCardsInCollectionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScryfallCardsInCollectionScalarFieldEnum>;
}
