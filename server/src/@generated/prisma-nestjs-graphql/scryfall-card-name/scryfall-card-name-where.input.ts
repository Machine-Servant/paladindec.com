import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardNameWhereInput {

    @Field(() => [ScryfallCardNameWhereInput], {nullable:true})
    AND?: Array<ScryfallCardNameWhereInput>;

    @Field(() => [ScryfallCardNameWhereInput], {nullable:true})
    OR?: Array<ScryfallCardNameWhereInput>;

    @Field(() => [ScryfallCardNameWhereInput], {nullable:true})
    NOT?: Array<ScryfallCardNameWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
