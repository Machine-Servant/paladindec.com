import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFaceCreateManyCardInput } from './card-face-create-many-card.input';

@InputType()
export class CardFaceCreateManyCardInputEnvelope {
  @Field(() => [CardFaceCreateManyCardInput], { nullable: false })
  data!: Array<CardFaceCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
