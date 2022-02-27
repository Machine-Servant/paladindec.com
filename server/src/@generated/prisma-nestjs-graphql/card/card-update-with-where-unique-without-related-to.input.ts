import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutRelatedToInput } from './card-update-without-related-to.input';

@InputType()
export class CardUpdateWithWhereUniqueWithoutRelatedToInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutRelatedToInput, { nullable: false })
  data!: CardUpdateWithoutRelatedToInput;
}
