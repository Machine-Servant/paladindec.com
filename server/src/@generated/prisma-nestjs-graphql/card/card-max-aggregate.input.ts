import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    scryfallCardId?: true;

    @Field(() => Boolean, {nullable:true})
    collectorNumber?: true;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: true;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: true;

    @Field(() => Boolean, {nullable:true})
    isPaper?: true;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: true;
}
