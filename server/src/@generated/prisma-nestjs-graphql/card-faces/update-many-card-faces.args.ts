import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesUpdateManyMutationInput } from './card-faces-update-many-mutation.input';
import { CardFacesWhereInput } from './card-faces-where.input';

@ArgsType()
export class UpdateManyCardFacesArgs {
  @Field(() => CardFacesUpdateManyMutationInput, { nullable: false })
  data!: CardFacesUpdateManyMutationInput;

  @Field(() => CardFacesWhereInput, { nullable: true })
  where?: CardFacesWhereInput;
}
