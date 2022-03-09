import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameWhereInput } from './scryfall-card-name-where.input';
import { ScryfallCardNameOrderByWithRelationInput } from './scryfall-card-name-order-by-with-relation.input';
import { ScryfallCardNameWhereUniqueInput } from './scryfall-card-name-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardNameScalarFieldEnum } from './scryfall-card-name-scalar-field.enum';

@ArgsType()
export class FindFirstScryfallCardNameArgs {

    @Field(() => ScryfallCardNameWhereInput, {nullable:true})
    where?: ScryfallCardNameWhereInput;

    @Field(() => [ScryfallCardNameOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallCardNameOrderByWithRelationInput>;

    @Field(() => ScryfallCardNameWhereUniqueInput, {nullable:true})
    cursor?: ScryfallCardNameWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScryfallCardNameScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScryfallCardNameScalarFieldEnum>;
}
