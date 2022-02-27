import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { CardRelationFilter } from '../card/card-relation-filter.input';

@InputType()
export class RelatedCardWhereInput {
  @Field(() => [RelatedCardWhereInput], { nullable: true })
  AND?: Array<RelatedCardWhereInput>;

  @Field(() => [RelatedCardWhereInput], { nullable: true })
  OR?: Array<RelatedCardWhereInput>;

  @Field(() => [RelatedCardWhereInput], { nullable: true })
  NOT?: Array<RelatedCardWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => CardRelationFilter, { nullable: true })
  reference?: CardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  referenceId?: StringFilter;

  @Field(() => CardRelationFilter, { nullable: true })
  card?: CardRelationFilter;

  @Field(() => StringFilter, { nullable: true })
  cardId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  component?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  typeLine?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  uri?: StringFilter;
}
