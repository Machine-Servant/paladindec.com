import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesScalarWhereInput } from './card-faces-scalar-where.input';
import { CardFacesUpdateManyMutationInput } from './card-faces-update-many-mutation.input';

@InputType()
export class CardFacesUpdateManyWithWhereWithoutCardInput {
  @Field(() => CardFacesScalarWhereInput, { nullable: false })
  where!: CardFacesScalarWhereInput;

  @Field(() => CardFacesUpdateManyMutationInput, { nullable: false })
  data!: CardFacesUpdateManyMutationInput;
}
