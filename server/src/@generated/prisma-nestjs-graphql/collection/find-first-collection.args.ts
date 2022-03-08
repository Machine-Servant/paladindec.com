import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { CollectionOrderByWithRelationInput } from './collection-order-by-with-relation.input';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CollectionScalarFieldEnum } from './collection-scalar-field.enum';

@ArgsType()
export class FindFirstCollectionArgs {

    @Field(() => CollectionWhereInput, {nullable:true})
    where?: CollectionWhereInput;

    @Field(() => [CollectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CollectionOrderByWithRelationInput>;

    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    cursor?: CollectionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CollectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CollectionScalarFieldEnum>;
}
