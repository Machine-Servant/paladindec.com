import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RelatedCardScalarWhereInput {
  @Field(() => [RelatedCardScalarWhereInput], { nullable: true })
  AND?: Array<RelatedCardScalarWhereInput>;

  @Field(() => [RelatedCardScalarWhereInput], { nullable: true })
  OR?: Array<RelatedCardScalarWhereInput>;

  @Field(() => [RelatedCardScalarWhereInput], { nullable: true })
  NOT?: Array<RelatedCardScalarWhereInput>;

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
}
