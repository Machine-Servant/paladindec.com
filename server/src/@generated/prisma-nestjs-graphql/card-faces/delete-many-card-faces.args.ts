import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesWhereInput } from './card-faces-where.input';

@ArgsType()
export class DeleteManyCardFacesArgs {
  @Field(() => CardFacesWhereInput, { nullable: true })
  where?: CardFacesWhereInput;
}
