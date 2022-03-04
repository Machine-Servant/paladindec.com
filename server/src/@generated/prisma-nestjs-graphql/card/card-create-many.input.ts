import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    scryfallCardId!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;
}
