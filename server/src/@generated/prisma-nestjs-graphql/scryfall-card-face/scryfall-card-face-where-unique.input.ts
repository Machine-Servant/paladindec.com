import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardFaceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
