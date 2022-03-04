import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CardCountAggregate } from './card-count-aggregate.output';
import { CardMinAggregate } from './card-min-aggregate.output';
import { CardMaxAggregate } from './card-max-aggregate.output';

@ObjectType()
export class CardGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    scryfallCardId!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:false})
    isBorderless!: boolean;

    @Field(() => Boolean, {nullable:false})
    isShowcase!: boolean;

    @Field(() => Boolean, {nullable:false})
    isPaper!: boolean;

    @Field(() => Boolean, {nullable:false})
    canBeFoil!: boolean;

    @Field(() => CardCountAggregate, {nullable:true})
    _count?: CardCountAggregate;

    @Field(() => CardMinAggregate, {nullable:true})
    _min?: CardMinAggregate;

    @Field(() => CardMaxAggregate, {nullable:true})
    _max?: CardMaxAggregate;
}