import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ScryfallRelatedCardScalarWhereInput {

    @Field(() => [ScryfallRelatedCardScalarWhereInput], {nullable:true})
    AND?: Array<ScryfallRelatedCardScalarWhereInput>;

    @Field(() => [ScryfallRelatedCardScalarWhereInput], {nullable:true})
    OR?: Array<ScryfallRelatedCardScalarWhereInput>;

    @Field(() => [ScryfallRelatedCardScalarWhereInput], {nullable:true})
    NOT?: Array<ScryfallRelatedCardScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    referenceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cardId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    component?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    typeLine?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    uri?: StringFilter;
}
