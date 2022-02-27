import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceUpdateInput } from './card-face-update.input';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';

@ArgsType()
export class UpdateOneCardFaceArgs {
  @Field(() => CardFaceUpdateInput, { nullable: false })
  data!: CardFaceUpdateInput;

  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;
}
