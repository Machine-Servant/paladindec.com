import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceWhereUniqueInput } from './card-face-where-unique.input';
import { CardFaceUpdateWithoutCardInput } from './card-face-update-without-card.input';

@InputType()
export class CardFaceUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => CardFaceWhereUniqueInput, { nullable: false })
  where!: CardFaceWhereUniqueInput;

  @Field(() => CardFaceUpdateWithoutCardInput, { nullable: false })
  data!: CardFaceUpdateWithoutCardInput;
}
