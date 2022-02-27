import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutCardFacesInput } from './card-create-without-card-faces.input';

@InputType()
export class CardCreateOrConnectWithoutCardFacesInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardCreateWithoutCardFacesInput, { nullable: false })
  create!: CardCreateWithoutCardFacesInput;
}
