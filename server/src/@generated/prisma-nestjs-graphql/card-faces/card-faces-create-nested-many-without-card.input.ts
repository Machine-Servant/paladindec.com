import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesCreateWithoutCardInput } from './card-faces-create-without-card.input';
import { CardFacesCreateOrConnectWithoutCardInput } from './card-faces-create-or-connect-without-card.input';
import { CardFacesCreateManyCardInputEnvelope } from './card-faces-create-many-card-input-envelope.input';
import { CardFacesWhereUniqueInput } from './card-faces-where-unique.input';

@InputType()
export class CardFacesCreateNestedManyWithoutCardInput {
  @Field(() => [CardFacesCreateWithoutCardInput], { nullable: true })
  create?: Array<CardFacesCreateWithoutCardInput>;

  @Field(() => [CardFacesCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<CardFacesCreateOrConnectWithoutCardInput>;

  @Field(() => CardFacesCreateManyCardInputEnvelope, { nullable: true })
  createMany?: CardFacesCreateManyCardInputEnvelope;

  @Field(() => [CardFacesWhereUniqueInput], { nullable: true })
  connect?: Array<CardFacesWhereUniqueInput>;
}
