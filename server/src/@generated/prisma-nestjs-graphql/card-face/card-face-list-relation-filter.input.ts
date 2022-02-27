import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceWhereInput } from './card-face-where.input';

@InputType()
export class CardFaceListRelationFilter {
  @Field(() => CardFaceWhereInput, { nullable: true })
  every?: CardFaceWhereInput;

  @Field(() => CardFaceWhereInput, { nullable: true })
  some?: CardFaceWhereInput;

  @Field(() => CardFaceWhereInput, { nullable: true })
  none?: CardFaceWhereInput;
}
