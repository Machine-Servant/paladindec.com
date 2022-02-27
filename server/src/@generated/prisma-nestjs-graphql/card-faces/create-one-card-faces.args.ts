import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesCreateInput } from './card-faces-create.input';

@ArgsType()
export class CreateOneCardFacesArgs {
  @Field(() => CardFacesCreateInput, { nullable: false })
  data!: CardFacesCreateInput;
}
