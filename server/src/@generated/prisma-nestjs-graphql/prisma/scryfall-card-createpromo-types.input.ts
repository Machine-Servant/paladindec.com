import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScryfallCardCreatepromoTypesInput {
  @Field(() => [String], { nullable: false })
  set!: Array<string>;
}
