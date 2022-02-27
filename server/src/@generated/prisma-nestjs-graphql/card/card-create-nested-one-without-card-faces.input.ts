import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCardFacesInput } from './card-create-without-card-faces.input';
import { CardCreateOrConnectWithoutCardFacesInput } from './card-create-or-connect-without-card-faces.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedOneWithoutCardFacesInput {
  @Field(() => CardCreateWithoutCardFacesInput, { nullable: true })
  create?: CardCreateWithoutCardFacesInput;

  @Field(() => CardCreateOrConnectWithoutCardFacesInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutCardFacesInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
