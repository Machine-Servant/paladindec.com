import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedCardWhereInput } from './related-card-where.input';

@InputType()
export class RelatedCardListRelationFilter {
  @Field(() => RelatedCardWhereInput, { nullable: true })
  every?: RelatedCardWhereInput;

  @Field(() => RelatedCardWhereInput, { nullable: true })
  some?: RelatedCardWhereInput;

  @Field(() => RelatedCardWhereInput, { nullable: true })
  none?: RelatedCardWhereInput;
}
