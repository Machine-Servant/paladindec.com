import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ScryfallCardFaceAvgAggregate {

    @Field(() => Float, {nullable:true})
    cmc?: number;
}
