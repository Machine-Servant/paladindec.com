import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateManySetInput } from './card-create-many-set.input';

@InputType()
export class CardCreateManySetInputEnvelope {
  @Field(() => [CardCreateManySetInput], { nullable: false })
  data!: Array<CardCreateManySetInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
