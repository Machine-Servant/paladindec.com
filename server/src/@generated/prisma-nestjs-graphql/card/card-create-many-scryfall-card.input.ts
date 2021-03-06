import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CardCreateManyScryfallCardInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    collectorNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isBorderless?: boolean;

    @Field(() => Boolean, {nullable:true})
    isShowcase?: boolean;

    @Field(() => Boolean, {nullable:true})
    isPaper?: boolean;

    @Field(() => Boolean, {nullable:true})
    isExtendedArt?: boolean;

    @Field(() => Boolean, {nullable:true})
    isRetro?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeNonFoil?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeFoil?: boolean;

    @Field(() => Boolean, {nullable:true})
    canBeEtched?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
