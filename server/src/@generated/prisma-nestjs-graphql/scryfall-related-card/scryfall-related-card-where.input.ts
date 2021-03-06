import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardRelationFilter } from '../scryfall-card/scryfall-card-relation-filter.input';

@InputType()
export class ScryfallRelatedCardWhereInput {
  @Field(() => [ScryfallRelatedCardWhereInput], { nullable: true })
  AND?: Array<ScryfallRelatedCardWhereInput>;

  @Field(() => [ScryfallRelatedCardWhereInput], { nullable: true })
  OR?: Array<ScryfallRelatedCardWhereInput>;

  @Field(() => [ScryfallRelatedCardWhereInput], { nullable: true })
  NOT?: Array<ScryfallRelatedCardWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  referenceId?: StringFilter;

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

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => ScryfallCardRelationFilter, { nullable: true })
  card?: ScryfallCardRelationFilter;

  @Field(() => ScryfallCardRelationFilter, { nullable: true })
  reference?: ScryfallCardRelationFilter;
}
