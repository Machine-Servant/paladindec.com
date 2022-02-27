import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutSetInput } from './card-create-without-set.input';
import { CardCreateOrConnectWithoutSetInput } from './card-create-or-connect-without-set.input';
import { CardCreateManySetInputEnvelope } from './card-create-many-set-input-envelope.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardCreateNestedManyWithoutSetInput {
  @Field(() => [CardCreateWithoutSetInput], { nullable: true })
  create?: Array<CardCreateWithoutSetInput>;

  @Field(() => [CardCreateOrConnectWithoutSetInput], { nullable: true })
  connectOrCreate?: Array<CardCreateOrConnectWithoutSetInput>;

  @Field(() => CardCreateManySetInputEnvelope, { nullable: true })
  createMany?: CardCreateManySetInputEnvelope;

  @Field(() => [CardWhereUniqueInput], { nullable: true })
  connect?: Array<CardWhereUniqueInput>;
}
