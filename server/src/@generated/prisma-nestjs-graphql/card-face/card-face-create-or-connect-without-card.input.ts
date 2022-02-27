import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { CardFaceCreateWithoutCardInput } from './card-face-create-without-card.input';

@InputType()
export class CardFaceCreateOrConnectWithoutCardInput {
  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;

  @Field(() => CardFaceCreateWithoutCardInput, { nullable: false })
  create!: CardFaceCreateWithoutCardInput;
}
