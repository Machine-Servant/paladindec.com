import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CollectionScalarWhereWithAggregatesInput {

    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CollectionScalarWhereWithAggregatesInput>;

    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CollectionScalarWhereWithAggregatesInput>;

    @Field(() => [CollectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CollectionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
