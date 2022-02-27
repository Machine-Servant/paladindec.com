import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereInput } from './card-faces-where.input';
import { CardFacesOrderByWithRelationInput } from './card-faces-order-by-with-relation.input';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardFacesScalarFieldEnum } from './card-faces-scalar-field.enum';

@ArgsType()
export class FindFirstCardFacesArgs {
  @Field(() => CardFacesWhereInput, { nullable: true })
  where?: CardFacesWhereInput;

  @Field(() => [CardFacesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CardFacesOrderByWithRelationInput>;

  @Field(() => CardFacesWhereUniqueInput, { nullable: true })
  cursor?: CardFacesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CardFacesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CardFacesScalarFieldEnum>;
}
