import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereInput } from './card-face-where.input';
import { CardFaceOrderByWithRelationInput } from './card-face-order-by-with-relation.input';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardFaceScalarFieldEnum } from './card-face-scalar-field.enum';

@ArgsType()
export class FindManyCardFaceArgs {
  @Field(() => CardFaceWhereInput, { nullable: true })
  where?: CardFaceWhereInput;

  @Field(() => [CardFaceOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CardFaceOrderByWithRelationInput>;

  @Field(() => CardFaceWhereUniqueInput, { nullable: true })
  cursor?: CardFaceWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CardFaceScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CardFaceScalarFieldEnum>;
}
