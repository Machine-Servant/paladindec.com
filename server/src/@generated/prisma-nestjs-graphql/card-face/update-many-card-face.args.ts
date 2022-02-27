import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFaceUpdateManyMutationInput } from './card-face-update-many-mutation.input';
import { CardFaceWhereInput } from './card-face-where.input';

@ArgsType()
export class UpdateManyCardFaceArgs {
  @Field(() => CardFaceUpdateManyMutationInput, { nullable: false })
  data!: CardFaceUpdateManyMutationInput;

  @Field(() => CardFaceWhereInput, { nullable: true })
  where?: CardFaceWhereInput;
}
