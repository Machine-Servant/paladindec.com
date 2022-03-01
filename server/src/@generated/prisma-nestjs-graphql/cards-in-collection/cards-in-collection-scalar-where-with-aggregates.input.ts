import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CardsInCollectionScalarWhereWithAggregatesInput {
  @Field(() => [CardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<CardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => [CardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<CardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => [CardsInCollectionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<CardsInCollectionScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  collectionId?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  count?: IntWithAggregatesFilter;
}
