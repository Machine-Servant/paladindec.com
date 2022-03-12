import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScryfallSetCountAggregate } from './scryfall-set-count-aggregate.output';
import { ScryfallSetAvgAggregate } from './scryfall-set-avg-aggregate.output';
import { ScryfallSetSumAggregate } from './scryfall-set-sum-aggregate.output';
import { ScryfallSetMinAggregate } from './scryfall-set-min-aggregate.output';
import { ScryfallSetMaxAggregate } from './scryfall-set-max-aggregate.output';

@ObjectType()
export class ScryfallSetGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    mtgoCode?: string;

    @Field(() => String, {nullable:true})
    arenaCode?: string;

    @Field(() => Int, {nullable:true})
    tcgPlayerId?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    setType!: string;

    @Field(() => Date, {nullable:true})
    releasedAt?: Date | string;

    @Field(() => String, {nullable:true})
    blockCode?: string;

    @Field(() => String, {nullable:true})
    block?: string;

    @Field(() => String, {nullable:true})
    parentSetCode?: string;

    @Field(() => Int, {nullable:false})
    cardCount!: number;

    @Field(() => Int, {nullable:true})
    printedSize?: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ScryfallSetCountAggregate, {nullable:true})
    _count?: ScryfallSetCountAggregate;

    @Field(() => ScryfallSetAvgAggregate, {nullable:true})
    _avg?: ScryfallSetAvgAggregate;

    @Field(() => ScryfallSetSumAggregate, {nullable:true})
    _sum?: ScryfallSetSumAggregate;

    @Field(() => ScryfallSetMinAggregate, {nullable:true})
    _min?: ScryfallSetMinAggregate;

    @Field(() => ScryfallSetMaxAggregate, {nullable:true})
    _max?: ScryfallSetMaxAggregate;
}
