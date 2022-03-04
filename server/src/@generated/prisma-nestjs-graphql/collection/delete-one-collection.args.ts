import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@ArgsType()
export class DeleteOneCollectionArgs {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    where!: CollectionWhereUniqueInput;
}
