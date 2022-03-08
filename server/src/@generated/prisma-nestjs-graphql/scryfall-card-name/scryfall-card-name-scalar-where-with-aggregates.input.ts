import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ScryfallCardNameScalarWhereWithAggregatesInput {

    @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

    @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

    @Field(() => [ScryfallCardNameScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ScryfallCardNameScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
