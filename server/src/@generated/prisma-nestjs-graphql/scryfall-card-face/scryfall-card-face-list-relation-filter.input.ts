import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereInput } from './scryfall-card-face-where.input';

@InputType()
export class ScryfallCardFaceListRelationFilter {

    @Field(() => ScryfallCardFaceWhereInput, {nullable:true})
    every?: ScryfallCardFaceWhereInput;

    @Field(() => ScryfallCardFaceWhereInput, {nullable:true})
    some?: ScryfallCardFaceWhereInput;

    @Field(() => ScryfallCardFaceWhereInput, {nullable:true})
    none?: ScryfallCardFaceWhereInput;
}
