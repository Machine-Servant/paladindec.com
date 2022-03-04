import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionCreateManyInput } from './collection-create-many.input';

@ArgsType()
export class CreateManyCollectionArgs {

    @Field(() => [CollectionCreateManyInput], {nullable:false})
    data!: Array<CollectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
