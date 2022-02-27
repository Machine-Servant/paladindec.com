import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesUpdateInput } from './card-faces-update.input';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';

@ArgsType()
export class UpdateOneCardFacesArgs {
  @Field(() => CardFacesUpdateInput, { nullable: false })
  data!: CardFacesUpdateInput;

  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;
}
