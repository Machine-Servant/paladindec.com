import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CollectionCount {

    @Field(() => Int, {nullable:false})
    cards?: number;
}
