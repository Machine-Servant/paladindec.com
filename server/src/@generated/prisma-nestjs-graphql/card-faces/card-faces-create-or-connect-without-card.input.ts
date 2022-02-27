import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { CardFacesCreateWithoutCardInput } from './card-faces-create-without-card.input';

@InputType()
export class CardFacesCreateOrConnectWithoutCardInput {
  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;

  @Field(() => CardFacesCreateWithoutCardInput, { nullable: false })
  create!: CardFacesCreateWithoutCardInput;
}
