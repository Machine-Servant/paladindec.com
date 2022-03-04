import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';
import { ScryfallCardOrderByWithRelationInput } from './scryfall-card-order-by-with-relation.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardScalarFieldEnum } from './scryfall-card-scalar-field.enum';

@ArgsType()
export class FindFirstScryfallCardArgs {

    @Field(() => ScryfallCardWhereInput, {nullable:true})
    where?: ScryfallCardWhereInput;

    @Field(() => [ScryfallCardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallCardOrderByWithRelationInput>;

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:true})
    cursor?: ScryfallCardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScryfallCardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScryfallCardScalarFieldEnum>;
}
