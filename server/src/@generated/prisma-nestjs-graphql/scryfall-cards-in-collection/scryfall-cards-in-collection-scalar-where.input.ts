import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ScryfallCardsInCollectionScalarWhereInput {
  @Field(() => [ScryfallCardsInCollectionScalarWhereInput], { nullable: true })
  AND?: Array<ScryfallCardsInCollectionScalarWhereInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereInput], { nullable: true })
  OR?: Array<ScryfallCardsInCollectionScalarWhereInput>;

  @Field(() => [ScryfallCardsInCollectionScalarWhereInput], { nullable: true })
  NOT?: Array<ScryfallCardsInCollectionScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  collectionId?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;
}
