import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceScalarWhereInput } from './card-face-scalar-where.input';
import { CardFaceUpdateManyMutationInput } from './card-face-update-many-mutation.input';

@InputType()
export class CardFaceUpdateManyWithWhereWithoutCardInput {
  @Field(() => CardFaceScalarWhereInput, { nullable: false })
  where!: CardFaceScalarWhereInput;

  @Field(() => CardFaceUpdateManyMutationInput, { nullable: false })
  data!: CardFaceUpdateManyMutationInput;
}
