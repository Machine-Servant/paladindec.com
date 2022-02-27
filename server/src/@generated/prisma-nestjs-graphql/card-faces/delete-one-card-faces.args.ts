import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';

@ArgsType()
export class DeleteOneCardFacesArgs {
  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;
}
