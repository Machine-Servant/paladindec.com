import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceCreateInput } from './card-face-create.input';

@ArgsType()
export class CreateOneCardFaceArgs {
  @Field(() => CardFaceCreateInput, { nullable: false })
  data!: CardFaceCreateInput;
}
