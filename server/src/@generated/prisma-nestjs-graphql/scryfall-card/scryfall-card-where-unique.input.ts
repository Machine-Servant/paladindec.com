import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
