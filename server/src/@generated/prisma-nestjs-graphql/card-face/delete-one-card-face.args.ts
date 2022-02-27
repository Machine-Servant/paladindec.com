import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';

@ArgsType()
export class DeleteOneCardFaceArgs {
  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;
}
