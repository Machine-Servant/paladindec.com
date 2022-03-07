import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionWhereInput } from './cards-in-collection-where.input';
import { CardsInCollectionOrderByWithRelationInput } from './cards-in-collection-order-by-with-relation.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardsInCollectionScalarFieldEnum } from './cards-in-collection-scalar-field.enum';

@ArgsType()
export class FindManyCardsInCollectionArgs {
  @Field(() => CardsInCollectionWhereInput, { nullable: true })
  where?: CardsInCollectionWhereInput;

  @Field(() => [CardsInCollectionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CardsInCollectionOrderByWithRelationInput>;

  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: true })
  cursor?: CardsInCollectionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CardsInCollectionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CardsInCollectionScalarFieldEnum>;
}
