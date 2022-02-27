import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutSetInput } from './card-update-without-set.input';

@InputType()
export class CardUpdateWithWhereUniqueWithoutSetInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutSetInput, { nullable: false })
  data!: CardUpdateWithoutSetInput;
}
