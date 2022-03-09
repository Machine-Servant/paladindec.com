import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';

@InputType()
export class CollectionRelationFilter {

    @Field(() => CollectionWhereInput, {nullable:true})
    is?: CollectionWhereInput;

    @Field(() => CollectionWhereInput, {nullable:true})
    isNot?: CollectionWhereInput;
}
