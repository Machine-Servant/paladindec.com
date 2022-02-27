import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardFacesCreateManyCardInput } from './card-faces-create-many-card.input';

@InputType()
export class CardFacesCreateManyCardInputEnvelope {
  @Field(() => [CardFacesCreateManyCardInput], { nullable: false })
  data!: Array<CardFacesCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
