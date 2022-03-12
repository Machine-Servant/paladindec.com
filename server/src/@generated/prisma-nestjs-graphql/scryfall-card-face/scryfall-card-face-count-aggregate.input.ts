import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ScryfallCardFaceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    cardId?: true;

    @Field(() => Boolean, {nullable:true})
    artist?: true;

    @Field(() => Boolean, {nullable:true})
    cmc?: true;

    @Field(() => Boolean, {nullable:true})
    colorIndicator?: true;

    @Field(() => Boolean, {nullable:true})
    colors?: true;

    @Field(() => Boolean, {nullable:true})
    flavorText?: true;

    @Field(() => Boolean, {nullable:true})
    illustrationId?: true;

    @Field(() => Boolean, {nullable:true})
    imageUris?: true;

    @Field(() => Boolean, {nullable:true})
    layout?: true;

    @Field(() => Boolean, {nullable:true})
    loyalty?: true;

    @Field(() => Boolean, {nullable:true})
    manaCost?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    oracleId?: true;

    @Field(() => Boolean, {nullable:true})
    oracleText?: true;

    @Field(() => Boolean, {nullable:true})
    power?: true;

    @Field(() => Boolean, {nullable:true})
    printedName?: true;

    @Field(() => Boolean, {nullable:true})
    printedText?: true;

    @Field(() => Boolean, {nullable:true})
    printedTypeLine?: true;

    @Field(() => Boolean, {nullable:true})
    toughness?: true;

    @Field(() => Boolean, {nullable:true})
    typeLine?: true;

    @Field(() => Boolean, {nullable:true})
    watermark?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
