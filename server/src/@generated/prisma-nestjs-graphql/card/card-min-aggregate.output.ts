import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CardMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    scryfallCardId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    isEtched?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;
}
