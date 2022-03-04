import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionCreateWithoutUserInput } from './collection-create-without-user.input';

@InputType()
export class CollectionCreateOrConnectWithoutUserInput {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    where!: CollectionWhereUniqueInput;

    @Field(() => CollectionCreateWithoutUserInput, {nullable:false})
    create!: CollectionCreateWithoutUserInput;
}
