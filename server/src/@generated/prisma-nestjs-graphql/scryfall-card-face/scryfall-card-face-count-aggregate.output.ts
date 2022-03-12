import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardFaceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    cardId!: number;

    @Field(() => Int, {nullable:false})
    artist!: number;

    @Field(() => Int, {nullable:false})
    cmc!: number;

    @Field(() => Int, {nullable:false})
    colorIndicator!: number;

    @Field(() => Int, {nullable:false})
    colors!: number;

    @Field(() => Int, {nullable:false})
    flavorText!: number;

    @Field(() => Int, {nullable:false})
    illustrationId!: number;

    @Field(() => Int, {nullable:false})
    imageUris!: number;

    @Field(() => Int, {nullable:false})
    layout!: number;

    @Field(() => Int, {nullable:false})
    loyalty!: number;

    @Field(() => Int, {nullable:false})
    manaCost!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    oracleId!: number;

    @Field(() => Int, {nullable:false})
    oracleText!: number;

    @Field(() => Int, {nullable:false})
    power!: number;

    @Field(() => Int, {nullable:false})
    printedName!: number;

    @Field(() => Int, {nullable:false})
    printedText!: number;

    @Field(() => Int, {nullable:false})
    printedTypeLine!: number;

    @Field(() => Int, {nullable:false})
    toughness!: number;

    @Field(() => Int, {nullable:false})
    typeLine!: number;

    @Field(() => Int, {nullable:false})
    watermark!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
