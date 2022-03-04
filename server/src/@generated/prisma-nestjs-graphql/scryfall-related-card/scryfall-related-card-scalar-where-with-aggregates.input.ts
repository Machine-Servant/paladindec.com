import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ScryfallRelatedCardScalarWhereWithAggregatesInput {

    @Field(() => [ScryfallRelatedCardScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ScryfallRelatedCardScalarWhereWithAggregatesInput>;

    @Field(() => [ScryfallRelatedCardScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ScryfallRelatedCardScalarWhereWithAggregatesInput>;

    @Field(() => [ScryfallRelatedCardScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ScryfallRelatedCardScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    referenceId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cardId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    component?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeLine?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uri?: StringWithAggregatesFilter;
}
