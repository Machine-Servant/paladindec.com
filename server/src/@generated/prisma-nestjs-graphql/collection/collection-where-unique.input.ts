import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionUserIdNameCompoundUniqueInput } from './collection-user-id-name-compound-unique.input';

@InputType()
export class CollectionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CollectionUserIdNameCompoundUniqueInput, {nullable:true})
    userId_name?: CollectionUserIdNameCompoundUniqueInput;
}
