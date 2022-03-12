import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    scryfallCardId!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    collectorNumber!: number;

    @Field(() => Int, {nullable:false})
    isBorderless!: number;

    @Field(() => Int, {nullable:false})
    isShowcase!: number;

    @Field(() => Int, {nullable:false})
    isPaper!: number;

    @Field(() => Int, {nullable:false})
    isExtendedArt!: number;

    @Field(() => Int, {nullable:false})
    isRetro!: number;

    @Field(() => Int, {nullable:false})
    canBeNonFoil!: number;

    @Field(() => Int, {nullable:false})
    canBeFoil!: number;

    @Field(() => Int, {nullable:false})
    canBeEtched!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
