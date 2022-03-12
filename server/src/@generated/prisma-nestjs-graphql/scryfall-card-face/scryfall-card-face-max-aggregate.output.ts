import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardFaceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    cardId?: string;

    @Field(() => String, {nullable:true})
    artist?: string;

    @Field(() => Float, {nullable:true})
    cmc?: number;

    @Field(() => String, {nullable:true})
    flavorText?: string;

    @Field(() => String, {nullable:true})
    illustrationId?: string;

    @Field(() => String, {nullable:true})
    layout?: string;

    @Field(() => String, {nullable:true})
    loyalty?: string;

    @Field(() => String, {nullable:true})
    manaCost?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    oracleId?: string;

    @Field(() => String, {nullable:true})
    oracleText?: string;

    @Field(() => String, {nullable:true})
    power?: string;

    @Field(() => String, {nullable:true})
    printedName?: string;

    @Field(() => String, {nullable:true})
    printedText?: string;

    @Field(() => String, {nullable:true})
    printedTypeLine?: string;

    @Field(() => String, {nullable:true})
    toughness?: string;

    @Field(() => String, {nullable:true})
    typeLine?: string;

    @Field(() => String, {nullable:true})
    watermark?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
