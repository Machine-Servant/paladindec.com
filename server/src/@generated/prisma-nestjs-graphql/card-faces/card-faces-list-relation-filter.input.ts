import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesWhereInput } from './card-faces-where.input';

@InputType()
export class CardFacesListRelationFilter {
  @Field(() => CardFacesWhereInput, { nullable: true })
  every?: CardFacesWhereInput;

  @Field(() => CardFacesWhereInput, { nullable: true })
  some?: CardFacesWhereInput;

  @Field(() => CardFacesWhereInput, { nullable: true })
  none?: CardFacesWhereInput;
}
