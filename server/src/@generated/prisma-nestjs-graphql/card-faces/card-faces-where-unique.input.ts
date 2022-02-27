import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CardFacesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
