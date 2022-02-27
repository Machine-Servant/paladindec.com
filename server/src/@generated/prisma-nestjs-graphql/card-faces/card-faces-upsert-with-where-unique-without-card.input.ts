import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';
import { CardFacesUpdateWithoutCardInput } from './card-faces-update-without-card.input';
import { CardFacesCreateWithoutCardInput } from './card-faces-create-without-card.input';

@InputType()
export class CardFacesUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => CardFacesWhereUniqueInput, { nullable: false })
  where!: CardFacesWhereUniqueInput;

  @Field(() => CardFacesUpdateWithoutCardInput, { nullable: false })
  update!: CardFacesUpdateWithoutCardInput;

  @Field(() => CardFacesCreateWithoutCardInput, { nullable: false })
  create!: CardFacesCreateWithoutCardInput;
}
