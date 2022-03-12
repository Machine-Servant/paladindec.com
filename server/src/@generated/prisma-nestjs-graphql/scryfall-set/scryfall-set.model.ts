import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScryfallCard } from '../scryfall-card/scryfall-card.model';
import { ScryfallSetCount } from './scryfall-set-count.output';

@ObjectType()
export class ScryfallSet {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    mtgoCode!: string | null;

    @Field(() => String, {nullable:true})
    arenaCode!: string | null;

    @Field(() => Int, {nullable:true})
    tcgPlayerId!: number | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    setType!: string;

    @Field(() => Date, {nullable:true})
    releasedAt!: Date | null;

    @Field(() => String, {nullable:true})
    blockCode!: string | null;

    @Field(() => String, {nullable:true})
    block!: string | null;

    @Field(() => String, {nullable:true})
    parentSetCode!: string | null;

    @Field(() => Int, {nullable:false})
    cardCount!: number;

    @Field(() => Int, {nullable:true})
    printedSize!: number | null;

    @Field(() => Boolean, {nullable:false})
    isDigital!: boolean;

    @Field(() => Boolean, {nullable:false})
    isFoilOnly!: boolean;

    @Field(() => Boolean, {nullable:false})
    isNonFoilOnly!: boolean;

    @Field(() => String, {nullable:false})
    scryfallUri!: string;

    @Field(() => String, {nullable:false})
    uri!: string;

    @Field(() => String, {nullable:false})
    iconSvgUri!: string;

    @Field(() => String, {nullable:false})
    searchUri!: string;

    @Field(() => [ScryfallCard], {nullable:true})
    cards?: Array<ScryfallCard>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ScryfallSetCount, {nullable:false})
    _count?: ScryfallSetCount;
}
