import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';

@InputType()
export class CardCreateOrConnectWithoutRelatedToInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardCreateWithoutRelatedToInput, { nullable: false })
  create!: CardCreateWithoutRelatedToInput;
}
