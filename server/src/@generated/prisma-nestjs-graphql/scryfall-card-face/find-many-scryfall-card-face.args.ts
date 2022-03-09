import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereInput } from './scryfall-card-face-where.input';
import { ScryfallCardFaceOrderByWithRelationInput } from './scryfall-card-face-order-by-with-relation.input';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScryfallCardFaceScalarFieldEnum } from './scryfall-card-face-scalar-field.enum';

@ArgsType()
export class FindManyScryfallCardFaceArgs {

    @Field(() => ScryfallCardFaceWhereInput, {nullable:true})
    where?: ScryfallCardFaceWhereInput;

    @Field(() => [ScryfallCardFaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScryfallCardFaceOrderByWithRelationInput>;

    @Field(() => ScryfallCardFaceWhereUniqueInput, {nullable:true})
    cursor?: ScryfallCardFaceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScryfallCardFaceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScryfallCardFaceScalarFieldEnum>;
}
