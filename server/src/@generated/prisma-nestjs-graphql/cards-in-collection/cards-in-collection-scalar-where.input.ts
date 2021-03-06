import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class CardsInCollectionScalarWhereInput {
  @Field(() => [CardsInCollectionScalarWhereInput], { nullable: true })
  AND?: Array<CardsInCollectionScalarWhereInput>;

  @Field(() => [CardsInCollectionScalarWhereInput], { nullable: true })
  OR?: Array<CardsInCollectionScalarWhereInput>;

  @Field(() => [CardsInCollectionScalarWhereInput], { nullable: true })
  NOT?: Array<CardsInCollectionScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  collectionId?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  isEtched?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  isFoil?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;
}
