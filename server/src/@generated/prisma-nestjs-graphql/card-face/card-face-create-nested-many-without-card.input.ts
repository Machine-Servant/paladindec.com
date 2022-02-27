import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceCreateWithoutCardInput } from './card-face-create-without-card.input';
import { CardFaceCreateOrConnectWithoutCardInput } from './card-face-create-or-connect-without-card.input';
import { CardFaceCreateManyCardInputEnvelope } from './card-face-create-many-card-input-envelope.input';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';

@InputType()
export class CardFaceCreateNestedManyWithoutCardInput {
  @Field(() => [CardFaceCreateWithoutCardInput], { nullable: true })
  create?: Array<CardFaceCreateWithoutCardInput>;

  @Field(() => [CardFaceCreateOrConnectWithoutCardInput], { nullable: true })
  connectOrCreate?: Array<CardFaceCreateOrConnectWithoutCardInput>;

  @Field(() => CardFaceCreateManyCardInputEnvelope, { nullable: true })
  createMany?: CardFaceCreateManyCardInputEnvelope;

  @Field(() => [CardFaceWhereUniqueInput], { nullable: true })
  connect?: Array<CardFaceWhereUniqueInput>;
}
