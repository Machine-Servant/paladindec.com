import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { CardFacesUpdateWithoutCardInput } from './card-faces-update-without-card.input';

@InputType()
export class CardFacesUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;

  @Field(() => CardFacesUpdateWithoutCardInput, { nullable: false })
  data!: CardFacesUpdateWithoutCardInput;
}
