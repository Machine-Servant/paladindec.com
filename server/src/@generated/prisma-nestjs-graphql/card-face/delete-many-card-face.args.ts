import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceWhereInput } from './card-face-where.input';

@ArgsType()
export class DeleteManyCardFaceArgs {
  @Field(() => CardFaceWhereInput, { nullable: true })
  where?: CardFaceWhereInput;
}
