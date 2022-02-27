import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardCreateWithoutSetInput } from './card-create-without-set.input';

@InputType()
export class CardCreateOrConnectWithoutSetInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardCreateWithoutSetInput, { nullable: false })
  create!: CardCreateWithoutSetInput;
}
