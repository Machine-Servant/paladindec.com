import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { CardFacesCreateInput } from './card-faces-create.input';
import { CardFacesUpdateInput } from './card-faces-update.input';

@ArgsType()
export class UpsertOneCardFacesArgs {
  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;

  @Field(() => CardFacesCreateInput, { nullable: false })
  create!: CardFacesCreateInput;

  @Field(() => CardFacesUpdateInput, { nullable: false })
  update!: CardFacesUpdateInput;
}
