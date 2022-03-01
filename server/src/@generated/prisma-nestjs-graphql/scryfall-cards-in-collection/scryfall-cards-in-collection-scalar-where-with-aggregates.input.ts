import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ScryfallCardsInCollectionScalarWhereWithAggregatesInput {
  @Field(() => [ScryfallCardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ScryfallCardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ScryfallCardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ScryfallCardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  collectionId?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  count?: IntWithAggregatesFilter;
}
