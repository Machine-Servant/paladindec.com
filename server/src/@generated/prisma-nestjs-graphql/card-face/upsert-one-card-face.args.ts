import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { CardFaceCreateInput } from './card-face-create.input';
import { CardFaceUpdateInput } from './card-face-update.input';

@ArgsType()
export class UpsertOneCardFaceArgs {
  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;

  @Field(() => CardFaceCreateInput, { nullable: false })
  create!: CardFaceCreateInput;

  @Field(() => CardFaceUpdateInput, { nullable: false })
  update!: CardFaceUpdateInput;
}
