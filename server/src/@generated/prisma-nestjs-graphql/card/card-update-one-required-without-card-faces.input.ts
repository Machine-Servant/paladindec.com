import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutCardFacesInput } from './card-create-without-card-faces.input';
import { CardCreateOrConnectWithoutCardFacesInput } from './card-create-or-connect-without-card-faces.input';
import { CardUpsertWithoutCardFacesInput } from './card-upsert-without-card-faces.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutCardFacesInput } from './card-update-without-card-faces.input';

@InputType()
export class CardUpdateOneRequiredWithoutCardFacesInput {
  @Field(() => CardCreateWithoutCardFacesInput, { nullable: true })
  create?: CardCreateWithoutCardFacesInput;

  @Field(() => CardCreateOrConnectWithoutCardFacesInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutCardFacesInput;

  @Field(() => CardUpsertWithoutCardFacesInput, { nullable: true })
  upsert?: CardUpsertWithoutCardFacesInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutCardFacesInput, { nullable: true })
  update?: CardUpdateWithoutCardFacesInput;
}
