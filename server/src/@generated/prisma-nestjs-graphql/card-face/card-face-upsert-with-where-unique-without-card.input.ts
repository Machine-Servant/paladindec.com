import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { CardFaceUpdateWithoutCardInput } from './card-face-update-without-card.input';
import { CardFaceCreateWithoutCardInput } from './card-face-create-without-card.input';

@InputType()
export class CardFaceUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;

  @Field(() => CardFaceUpdateWithoutCardInput, { nullable: false })
  update!: CardFaceUpdateWithoutCardInput;

  @Field(() => CardFaceCreateWithoutCardInput, { nullable: false })
  create!: CardFaceCreateWithoutCardInput;
}
