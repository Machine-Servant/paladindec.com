import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CollectionScalarWhereInput {
  @Field(() => [CollectionScalarWhereInput], { nullable: true })
  AND?: Array<CollectionScalarWhereInput>;

  @Field(() => [CollectionScalarWhereInput], { nullable: true })
  OR?: Array<CollectionScalarWhereInput>;

  @Field(() => [CollectionScalarWhereInput], { nullable: true })
  NOT?: Array<CollectionScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
