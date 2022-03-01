import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

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
}
