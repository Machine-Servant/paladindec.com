import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateWithoutCollectionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    externalAuthId!: string;

    @Field(() => String, {nullable:false})
    email!: string;
}
