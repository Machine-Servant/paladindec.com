import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceCreateManyInput } from './card-face-create-many.input';

@ArgsType()
export class CreateManyCardFaceArgs {
  @Field(() => [CardFaceCreateManyInput], { nullable: false })
  data!: Array<CardFaceCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
