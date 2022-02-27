import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutSetInput } from './card-update-without-set.input';
import { CardCreateWithoutSetInput } from './card-create-without-set.input';

@InputType()
export class CardUpsertWithWhereUniqueWithoutSetInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutSetInput, { nullable: false })
  update!: CardUpdateWithoutSetInput;

  @Field(() => CardCreateWithoutSetInput, { nullable: false })
  create!: CardCreateWithoutSetInput;
}
