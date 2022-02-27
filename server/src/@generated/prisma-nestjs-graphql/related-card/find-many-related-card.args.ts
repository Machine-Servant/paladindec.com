import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereInput } from './related-card-where.input';
import { RelatedCardOrderByWithRelationInput } from './related-card-order-by-with-relation.input';
import { RelatedCardWhereUniqueInput } from './related-card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RelatedCardScalarFieldEnum } from './related-card-scalar-field.enum';

@ArgsType()
export class FindManyRelatedCardArgs {
  @Field(() => RelatedCardWhereInput, { nullable: true })
  where?: RelatedCardWhereInput;

  @Field(() => [RelatedCardOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RelatedCardOrderByWithRelationInput>;

  @Field(() => RelatedCardWhereUniqueInput, { nullable: true })
  cursor?: RelatedCardWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [RelatedCardScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RelatedCardScalarFieldEnum>;
}
