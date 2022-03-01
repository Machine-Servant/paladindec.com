import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CardScalarWhereInput {
  @Field(() => [CardScalarWhereInput], { nullable: true })
  AND?: Array<CardScalarWhereInput>;

  @Field(() => [CardScalarWhereInput], { nullable: true })
  OR?: Array<CardScalarWhereInput>;

  @Field(() => [CardScalarWhereInput], { nullable: true })
  NOT?: Array<CardScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  scryfallCardId?: StringFilter;
}
